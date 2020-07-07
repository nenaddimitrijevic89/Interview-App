import React from 'react';
import { Col } from 'react-materialize';
import avatar from '../../../../images/avatar.jpg';
import style from './Candidate.module.css';

const Candidate = ({ candidate }) => {
    return (
        // <Col
        //     className={style.position}
        //     l={4}
        // >
        //     <div><img src={avatar} className={style.image} /></div>
        //     <div>{candidate.name}</div>
        // </Col>


        <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
                <div class="col s2">
                    <img src={avatar} alt="" class="circle responsive-img" />
                </div>
                <div class="col s10">
                    <span class="black-text">
                        {candidate.name}
                    </span>
                </div>
            </div>
        </div>

    )
}

export { Candidate };