import React from 'react';
import { serviceCandidate } from '../../../services/fetchCandidates';
import { Header } from '../../Header/Header';
import { serviceCompanies } from '../../../services/fetchCompanies';
import { Container, Col, Row, Button } from 'react-materialize';
import { CandidatesSelector } from './CandidatesSelector/CandidatesSelector';
import { Search } from '../../Search/Search';
import style from './CreateReportPage.module.css';
import { search } from '../../../shared/utilities';
import { NavList } from './NavList/NavList';
import { CompaniesSelector } from './CompaniesSelector/CompaniesSelector';
import { ReportDetailsSelector } from './ReportDetailsSelector/ReportDetailsSelector';
import { serviceReports } from '../../../services/fetchReports';
import { storageService } from '../../../services/StorageService';
import { Authentication } from '../../../services/AuthenticationService';

class CreateReportPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            candidates: [],
            filteredCandidates: [],
            companies: [],
            filteredCompanies: [],
            wizardStep: 1,
            newReportData: {
                candidateId: null,
                candidateName: null,
                companyId: null,
                companyName: null,
                interviewDate: '',
                phase: '',
                status: '',
                note: ''
            }
        }
    }

    componentDidMount() {
        serviceCandidate.getCandidates()
            .then(response => this.setState({ candidates: response, filteredCandidates: response }))

        serviceCompanies.getCompanies()
            .then(response => this.setState({ companies: response, filteredCompanies: response }))
    }

    postNewReport = () => {
        const token = storageService.get('accessToken')
        serviceReports.postReports(this.state.newReportData, token)
        this.props.history.push('/admin/reports')
    }

    searchCandidates = (text) => {
        let filtered = search(this.state.candidates, ['name'], text)
        this.setState({ filteredCandidates: filtered })
    }

    searchCompanies = (text) => {
        let filtered = search(this.state.companies, ['name'], text)
        this.setState({ filteredCompanies: filtered })
    }

    getCandidateData = (id, name) => {
        let report = { ...this.state.newReportData }
        report.candidateId = id;
        report.candidateName = name;
        this.setState({ newReportData: report })
    }

    getCompanyData = (id, name) => {
        let report = { ...this.state.newReportData }
        report.companyId = id;
        report.companyName = name;
        this.setState({ newReportData: report })
    }

    setInterviewDate = (date) => {
        let report = { ...this.state.newReportData }
        report.interviewDate = date;
        this.setState({ newReportData: report })
    }

    setPhase = (phase) => {
        let report = { ...this.state.newReportData };
        report.phase = phase;
        this.setState({ newReportData: report })
    }

    setStatus = (status) => {
        let report = { ...this.state.newReportData };
        report.status = status;
        this.setState({ newReportData: report })
    }

    setNote = (note) => {
        let report = { ...this.state.newReportData };
        report.note = note;
        this.setState({ newReportData: report })
    }

    nextStep = () => {
        let currentStep = this.state.wizardStep;
        if (currentStep === 1) {
            if (this.state.newReportData.candidateId !== null) {
                currentStep++;
                this.setState({ wizardStep: currentStep })
            } else {
                alert("You must choose candidate!")
            }
        } else if (currentStep === 2) {
            if (this.state.newReportData.companyId !== null) {
                currentStep++;
                this.setState({ wizardStep: currentStep })
            } else {
                alert("You must choose company!")
            }
        }
    }

    previousStep = () => {
        let currentStep = this.state.wizardStep;
        if (currentStep > 1) {
            currentStep--;
            this.setState({ wizardStep: currentStep })
        }
    }


    render() {
        const access = Authentication();
        if (!access) {
            this.props.history.push("/admin")
        }
        return (
            <>
                <Header isHomePage={false} />
                <Container>
                    <Row>
                        <Col l={3} s={12}>
                            <NavList wizardStep={this.state.wizardStep} report={this.state.newReportData} />
                        </Col>

                        {this.state.wizardStep === 1
                            ? <Col l={9} className={style.selectorWrapper}>
                                <Search search={this.searchCandidates} />
                                <CandidatesSelector
                                    candidates={this.state.filteredCandidates}
                                    getCandidateData={this.getCandidateData}
                                />
                                <Col className={style.alignEnd}>
                                    <Button className={style.btnColor} onClick={this.nextStep}>Next</Button>
                                </Col>
                            </Col>
                            : null
                        }

                        {this.state.wizardStep === 2
                            ? <Col l={9} className={style.selectorWrapper}>
                                <Search search={this.searchCompanies} />
                                <CompaniesSelector
                                    companies={this.state.filteredCompanies}
                                    getCompanyData={this.getCompanyData}
                                />
                                <Col l={6} m={6} s={6}>
                                    <Button className={style.btnColor} onClick={this.previousStep}>Back</Button>
                                </Col>
                                <Col className={style.alignEnd} l={6} m={6} s={6}>
                                    <Button className={style.btnColor} onClick={this.nextStep}>Next</Button>
                                </Col>
                            </Col>
                            : null
                        }

                        {this.state.wizardStep === 3
                            ? <Col l={9} className={style.reportDetailWrapper}>
                                <ReportDetailsSelector
                                    setInterviewDate={this.setInterviewDate}
                                    setPhase={this.setPhase}
                                    setStatus={this.setStatus}
                                    setNote={this.setNote}
                                />
                                <Col l={6} m={6} s={6}>
                                    <Button className={style.btnColor} onClick={this.previousStep}>Back</Button>
                                </Col>
                                <Col className={style.alignEnd} l={6} m={6} s={6}>
                                    <Button className={style.btnColor} onClick={this.postNewReport}>Submit</Button>
                                </Col>
                            </Col>
                            : null
                        }

                    </Row>
                </Container>
            </>
        )
    }
}

export { CreateReportPage };