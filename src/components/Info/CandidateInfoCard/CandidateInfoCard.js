import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import avatar from '../../../images/avatar.jpg';
import { convertDate } from '../../../shared/utilities';
import style from './CandidateInfoCard.module.css';

const CandidateInfoCard = ({ candidate }) => {
    const { name, email, birthday, education } = candidate;
    return (
        <Row>
            <Col s={12} m={6} l={4}>
                <Card
                    header={<CardTitle image={avatar}></CardTitle>}
                ></Card>
            </Col>
            <Col s={12} m={6} l={8}>
                <Card className={style.info}>
                    <h3 className={style.name}>{name}</h3>
                    <h5><i className="fa fa-envelope"></i> {email}</h5>
                    <h5><i className="fa fa-birthday-cake"></i> {convertDate(birthday)}</h5>
                    <h5><i className="fa fa-graduation-cap"></i> {education}</h5>
                </Card>
            </Col>
        </Row>

    )
}

export { CandidateInfoCard };