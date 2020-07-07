import React from 'react';
import { Row } from 'react-materialize';
import { Candidate } from './Candidate';

const CandidatesSelector = ({ candidates }) => {
    return (
        <Row>
            {candidates.map(candidate => <Candidate candidate={candidate} />)}
        </Row>
    )
}

export { CandidatesSelector };