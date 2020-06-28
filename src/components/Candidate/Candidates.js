import React from 'react';
import { Row } from 'react-materialize';
import { Candidate } from './Candidate';

const Candidates = ({ candidates }) => {
    return (
        <Row>
            {candidates.map(candidate =>
                <Candidate
                    name={candidate.name}
                    email={candidate.email} />)}
        </Row>
    )
}

export { Candidates }