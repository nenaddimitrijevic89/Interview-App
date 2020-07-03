import React from "react";
import { serviceReports } from "../../../services/fetchReports";
import { Header } from "../../Header/Header";
import { Container } from "react-materialize";
import { Report } from "./Report";
import { Authentication } from "../../../services/AuthenticationService";

class Reports extends React.Component {
    constructor() {
        super();
        this.state = {
            reports: []
        }
    }
    componentDidMount() {
        serviceReports.getReports()
            .then(response => this.setState({ reports: response }))
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
                    <Report reports={this.state.reports} />
                </Container>
            </>
        )
    }
}
export { Reports }