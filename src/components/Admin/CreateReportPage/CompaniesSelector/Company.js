import React from 'react';
import { Col } from 'react-materialize';
import style from './Company.module.css';

const Company = ({ getData, company }) => {
    const { id, name } = company;
    return (
        <Col tabIndex={id} l={6} m={6} s={12} className={style.card} onClick={() => { getData(id, name) }}>

            <h5>
                <i className="fa fa-building"></i> {name}
            </h5>

        </Col>
    )
}

export { Company };