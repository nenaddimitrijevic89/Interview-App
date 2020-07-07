import React from "react";
import { serviceReports } from "../../../services/fetchReports";
import { Header } from "../../Header/Header";
import { Container } from "react-materialize";
import { Report } from "./Report/Report";
import { Authentication } from "../../../services/AuthenticationService";
import { search } from "../../../shared/utilities";
import { Search } from "../../Search/Search";

class Reports extends React.Component {
    constructor() {
        super();
        this.state = {
            reports: [],
            filteredReports: [],
            modalIsOpen: false,
            report: {}
        }
    }
    componentDidMount() {
        serviceReports.getReports()
            .then(response => this.setState({ reports: response, filteredReports: response }))
    }
    openModal = (report = {}) => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, report }))
    }

    searchReports = (text) => {
        const filtered = search(this.state.reports, ['name', 'companyName'], text);
        this.setState({ filteredReports: filtered })
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
                    <Search search={this.searchReports} />
                    <Report
                        reports={this.state.filteredReports}
                        modalIsOpen={this.state.modalIsOpen}
                        openModal={this.openModal}
                        report={this.state.report}
                    />
                </Container>
            </>
        )
    }
}
export { Reports }