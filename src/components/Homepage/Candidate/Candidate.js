import React from 'react';
import { Col, Card, Icon, CardTitle } from 'react-materialize';
import avatar from '../../../images/avatar.jpg';
import style from './Candidate.module.css';
import { Link } from 'react-router-dom';

const Candidate = ({ name, email, id }) => {
    return (

        <Col
            l={4}
            m={6}
            s={12}
        >
            <Link to={`/info/${id}`}><Card
                className={style.cardBack}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={avatar}></CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
            >
                <h4 className={style.margin}>{name}</h4>
                <h6><i className="fa fa-envelope"></i> {email}</h6>
            </Card></Link>
        </Col>

    )
}

export { Candidate };