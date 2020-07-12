import React from 'react';
import { Row, Col } from 'react-materialize';
import style from './NavList.module.css';

const NavList = ({ wizardStep, report }) => {
    const { candidateName, companyName } = report;

    return (
        <>
            {wizardStep === 1 &&
                <Col l={12} s={6} className={style.borderRight}>
                    <Row><h4 className={`${style.boldText} ${style.margin}`}>Candidate</h4></Row>
                    <Row><h4 className={style.margin}>Company</h4></Row>
                    <Row><h4>Details</h4></Row>
                </Col>}

            {wizardStep === 2 &&
                <Col l={12} s={6} className={style.borderRight}>
                    <Row><h4 className={style.margin}>Candidate</h4></Row>
                    <Row><h4 className={`${style.boldText} ${style.margin}`}>Company</h4></Row>
                    <Row><h4>Details</h4></Row>
                </Col>}

            {wizardStep === 3 &&
                <Col l={12} s={6} className={style.borderRight}>
                    <Row><h4 className={style.margin}>Candidate</h4></Row>
                    <Row><h4 className={style.margin}>Company</h4></Row>
                    <Row><h4 className={style.boldText}>Details</h4></Row>
                </Col>}

            {wizardStep === 2 &&
                <Col l={12} s={6} className={`${style.borderRight} ${style.borderTop}`}>
                    <h6>Candidate:</h6>
                    <h6 className={style.boldText}>{candidateName}</h6>

                </Col>
            }

            {wizardStep === 3 &&
                <Col l={12} s={6} className={`${style.borderRight} ${style.borderTop}`}>
                    <h6>Candidate:</h6>
                    <h6 className={style.boldText}>{candidateName}</h6>
                    <h6>Company:</h6>
                    <h6 className={style.boldText}>{companyName}</h6>
                </Col>
            }
        </>
    )
}

export { NavList };