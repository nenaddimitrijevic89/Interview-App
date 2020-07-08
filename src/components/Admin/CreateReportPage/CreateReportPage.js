import React from 'react';
import { serviceCandidate } from '../../../services/fetchCandidates';
import { Header } from '../../Header/Header';
import { serviceCompanies } from '../../../services/fetchCompanies';
import { Container, Col, Row } from 'react-materialize';
import { CandidatesSelector } from './CandidatesSelector/CandidatesSelector';
import { Search } from '../../Search/Search';
import style from './CreateReportPage.module.css';
import { search } from '../../../shared/utilities';
import { NavList } from './NavList/NavList';

class CreateReportPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            candidates: [],
            filteredCandidates: [],
            companies: []
        }
    }

    componentDidMount() {
        serviceCandidate.getCandidates()
            .then(response => this.setState({ candidates: response, filteredCandidates: response }))

        serviceCompanies.getCompanies()
            .then(response => this.setState({ companies: response }))
    }

    searchData = (text) => {
        let filtered = search(this.state.candidates, ['name'], text)
        this.setState({ filteredCandidates: filtered })
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
                        <Col l={9} className={style.selectorWrapper}>
                            <Search search={this.searchData} />
                            <CandidatesSelector candidates={this.state.filteredCandidates} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export { CreateReportPage };