import React from 'react';
import { serviceCandidate } from '../../services/fetchCandidates';
import { Candidates } from './Candidates/Candidates';
import { Container } from 'react-materialize';
import { Search } from '../Search/Search';
import { Header } from '../Header/Header';
import { search } from '../../shared/utilities';

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

        const filtered = search(this.state.candidatesList, ['name'], text);
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