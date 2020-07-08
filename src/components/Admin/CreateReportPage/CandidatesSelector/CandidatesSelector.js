import React from 'react';
import { Row } from 'react-materialize';
import { Candidate } from './Candidate';
import style from './Candidate.module.css'

const CandidatesSelector = ({ candidates }) => {
    return (
        <Row className={style.candidateWrapper}>
            {candidates.map(candidate => <Candidate candidate={candidate} />)}
        </Row>
    )
}

export { CandidatesSelector };