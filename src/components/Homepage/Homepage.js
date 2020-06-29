import React from 'react';
import { serviceCandidate } from '../../services/fetchCandidates';
import { Candidates } from '../Candidate/Candidates';
import { Container } from 'react-materialize';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidatesList: []
        }

    }
    componentDidMount() {
        serviceCandidate.getCandidates()
            .then(response => this.setState({ candidatesList: response }))
    }

    render() {
        return (
            <Container>
                <Candidates candidates={this.state.candidatesList} />

            </Container>
        )
    }
}

export { Homepage }