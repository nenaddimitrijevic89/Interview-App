import React from 'react';
import { serviceCandidate } from '../../services/fetchCandidates';
import { Candidates } from './Candidate/Candidates';
import { Container } from 'react-materialize';
import { Search } from '../Search/Search';
import { Header } from '../Header/Header';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidatesList: [],
            filteredCandidatesList: []
        }

    }
    componentDidMount() {
        serviceCandidate.getCandidates()
            .then(response => this.setState({ candidatesList: response, filteredCandidatesList: response }))
    }

    searchCandidates = (text) => {
        const filtered = this.state.candidatesList.filter(candidate => {
            return candidate.name.toLowerCase().includes(text.toLowerCase())
        })
        this.setState({ filteredCandidatesList: filtered })
    }

    render() {
        return (
            <>
                <Header isHomePage={true} />
                <Container>
                    <Search search={this.searchCandidates} />
                    <Candidates candidates={this.state.filteredCandidatesList} />
                </Container>
            </>
        )
    }
}

export { Homepage }