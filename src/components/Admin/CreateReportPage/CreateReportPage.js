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

    searchData = (text) => {
        let filtered = search(this.state.candidates, ['name'], text)
        this.setState({ filteredCandidates: filtered })
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
        return (
            <>
                <Header isHomePage={false} />
                <Container>
                    <Row>
                        <Col l={3}>
                            <NavList />
                        </Col>

                        {this.state.wizardStep === 1
                            ? <Col l={9} className={style.selectorWrapper}>
                                <Search search={this.searchData} />
                                <CandidatesSelector
                                    candidates={this.state.filteredCandidates}
                                    getCandidateData={this.getCandidateData}
                                />
                                <Col>
                                    <Button className={style.btnColor} onClick={this.nextStep}>Next</Button>
                                </Col>
                            </Col>
                            : null
                        }

                        {this.state.wizardStep === 2
                            ? <Col l={9} className={style.selectorWrapper}>
                                <Search search={this.searchData} />
                                <CompaniesSelector
                                    companies={this.state.filteredCompanies}
                                    getCompanyData={this.getCompanyData}
                                />
                                <Col>
                                    <Button className={style.btnColor} onClick={this.previousStep}>Back</Button>
                                    <Button className={style.btnColor} onClick={this.nextStep}>Next</Button>
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