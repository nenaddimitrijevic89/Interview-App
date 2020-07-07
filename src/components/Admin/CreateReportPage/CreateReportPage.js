import React from 'react';
import { serviceCandidate } from '../../../services/fetchCandidates';
import { Header } from '../../Header/Header';
import { serviceReports } from '../../../services/fetchReports';
import { serviceCompanies } from '../../../services/fetchCompanies';
import { Container, Col, Row } from 'react-materialize';
import { CandidatesSelector } from './CandidatesSelector/CandidatesSelector';

class CreateReportPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            candidates: [],
            companies: []
        }
    }
    componentDidMount() {
        serviceCandidate.getCandidates()
            .then(response => this.setState({ candidates: response }))

        serviceCompanies.getCompanies()
            .then(response => this.setState({ companies: response }))
    }

    render() {
        return (
            <>
                <Header isHomePage={false} />
                <Container>
                    <Row>
                        <Col l={3}>

                        </Col>
                        <Col l={9}>
                            <CandidatesSelector candidates={this.state.candidates} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export { CreateReportPage };