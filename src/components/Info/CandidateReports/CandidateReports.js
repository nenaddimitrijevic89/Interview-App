import React from 'react';
import { Table, Card } from 'react-materialize';
import { convertDate } from '../../../shared/utilities';
import style from './CandidateReports.module.css';
import { ModalReport } from '../../../shared/ModalReport/ModalReport';

const CandidateReports = ({ reports, candidateId, modalIsOpen, openModal, report }) => {
    let reportsList = reports.filter(report => report.candidateId === Number(candidateId))
    console.log(reportsList)
    return (
        <>
            <ModalReport
                report={report}
                modalIsOpen={modalIsOpen}
                openModal={openModal} />

            <Card className={style.back}>
                <Table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Interview date</th>
                            <th>Status</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportsList.map((report, i) =>
                            <tr key={i}>
                                <td>
                                    {report.companyName}
                                </td>
                                <td>
                                    {convertDate(report.interviewDate)}
                                </td>
                                <td>
                                    {report.status}
                                </td>
                                <td><i class="fa fa-eye" onClick={() => openModal(report)}></i></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card>
        </>
    )
}

export { CandidateReports };