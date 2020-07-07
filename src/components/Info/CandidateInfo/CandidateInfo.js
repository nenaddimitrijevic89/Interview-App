import React from 'react';
import { serviceCandidate } from '../../../services/fetchCandidates';
import { CandidateInfoCard } from '../CandidateInfoCard/CandidateInfoCard';
import { Container } from 'react-materialize';
import { Header } from '../../../components/Header/Header';
import { serviceReports } from '../../../services/fetchReports';
import { CandidateReports } from '../CandidateReports/CandidateReports';

class CandidateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidate: [],
            reports: [],
            modalIsOpen: false,
            report: {}
        }
    }
    componentDidMount() {
        serviceCandidate.getCandidatesInfo(this.props.match.params.id)
            .then(candidateInfo => this.setState({ candidate: candidateInfo }))
        this.getCandidateReports()
    }

    getCandidateReports = () => {
        serviceReports.getReports()
            .then(response => this.setState({ reports: response }))
    }
    openModal = (report = {}) => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, report }))
    }

    render() {
        return (
            <>
                <Header isHomePage={true} />
                <Container>
                    <CandidateInfoCard candidate={this.state.candidate} />
                    <CandidateReports
                        reports={this.state.reports}
                        candidateId={this.props.match.params.id}
                        modalIsOpen={this.state.modalIsOpen}
                        openModal={this.openModal}
                        report={this.state.report}
                    />
                </Container>
            </>
        )
    }

}

export { CandidateInfo }