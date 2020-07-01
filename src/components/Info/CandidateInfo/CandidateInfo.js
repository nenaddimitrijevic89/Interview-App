import React from 'react';
import { serviceCandidate } from '../../../services/fetchCandidates';
import { CandidateInfoCard } from './CandidateInfoCard';
import { Container } from 'react-materialize';
import { Header } from '../../../components/Header/Header';
import { serviceReports } from '../../../services/fetchReports';

class CandidateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidate: [],
            reports: []
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

    render() {
        return (
            <>
                <Header />
                <Container>
                    <CandidateInfoCard candidate={this.state.candidate} />
                </Container>
            </>
        )
    }

}

export { CandidateInfo }