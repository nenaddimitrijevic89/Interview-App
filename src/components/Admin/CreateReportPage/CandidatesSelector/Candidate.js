import React from 'react';
import { Col } from 'react-materialize';
import avatar from '../../../../images/avatar.jpg';
import style from './Candidate.module.css';

const Candidate = ({ getData, candidate }) => {
    const { id, name, email } = candidate;
    return (

        <Col tabindex={id} l={6} m={6} s={12} className={style.card} onClick={() => { getData(id, name) }}>
            <Col l={3} m={3} s={3}>
                <img src={avatar} alt="" className="circle responsive-img" />
            </Col>
            <Col l={9} m={9} s={9} className={style.info}>
                <h5>
                    {name}
                </h5>
                <h6>
                    <i className='fa fa-envelope'></i> {email}
                </h6>
            </Col>
        </Col>

    )
}

export { Candidate };