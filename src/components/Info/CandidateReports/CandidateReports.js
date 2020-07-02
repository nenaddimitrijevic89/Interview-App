import React from 'react';
import { Table, Card } from 'react-materialize';
import { convertDate } from '../../../shared/utilities';
import style from './CandidateReports.module.css';

const CandidateReports = ({ reports, candidateId }) => {
    let reportsList = reports.filter(report => report.candidateId === Number(candidateId))
    console.log(reportsList)
    return (
        <Card className={style.back}>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Company
                    </th>
                        <th>
                            Interview date
                    </th>
                        <th>
                            Status
                    </th>
                        <th>
                            Info
                    </th>
                        <th>
                            Delete
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {reportsList.map(report =>
                        <tr>
                            <td>
                                {report.companyName}
                            </td>
                            <td>
                                {convertDate(report.interviewDate)}
                            </td>
                            <td>
                                {report.status}
                            </td>
                            <td><i class="fa fa-eye"></i></td>
                            <td><i class="fa fa-close"></i></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Card>
    )
}

export { CandidateReports };