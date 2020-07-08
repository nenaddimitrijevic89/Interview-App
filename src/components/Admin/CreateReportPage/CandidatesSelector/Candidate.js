import React from 'react';
import { Col, Row } from 'react-materialize';
import avatar from '../../../../images/avatar.jpg';
import style from './Candidate.module.css';

const Candidate = ({ candidate }) => {
    return (



        <Col l={6} className={style.card}>

            <Col l={3}>
                <img src={avatar} alt="" className="circle responsive-img" />
            </Col>
            <Col l={9}>
                <h5 className="black-text">
                    {candidate.name}
                </h5>
            </Col>

        </Col>

    )
}

export { Candidate };