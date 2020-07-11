import React from 'react';
import { DateSelector } from './DateSelector/DateSelector';
import { InfoSelector } from './InfoSelector/InfoSelector';
import { Row } from 'react-materialize';
import { phase, status } from '../../../../shared/constants';
import { Note } from './Note/Note';

const ReportDetailsSelector = ({ setInterviewDate, setPhase, setStatus, setNote }) => {
    return (
        <>
            <Row>
                <DateSelector setDate={setInterviewDate} />
                <InfoSelector infos={phase} label={'Phase:'} setOption={setPhase} />
                <InfoSelector infos={status} label={'Status:'} setOption={setStatus} />
            </Row>
            <Row>
                <Note setNote={setNote} />
            </Row>
        </>
    )
}

export { ReportDetailsSelector }