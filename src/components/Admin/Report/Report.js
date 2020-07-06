import React from 'react';
import style from './Report.module.css';
import { Card, Table } from 'react-materialize';
import { convertDate } from '../../../shared/utilities';
import { ModalReport } from '../../../shared/ModalReport';

const Report = ({ reports, modalIsOpen, openModal }) => {

    return (
        <Card className={style.back}>
            <Table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Interview date</th>
                        <th>Status</th>
                        <th>Info</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report =>
                        <tr key={report.id}>
                            <td>
                                {report.companyName}
                            </td>
                            <td>
                                {report.name}
                            </td>
                            <td>
                                {convertDate(report.interviewDate)}
                            </td>
                            <td>
                                {report.status}
                            </td>
                            <td><i class="fa fa-eye" onClick={() => openModal()}></i></td>
                            <td><i class="fa fa-close"></i></td>
                            <ModalReport
                                report={report}
                                modalIsOpen={modalIsOpen}
                                openModal={openModal} />
                        </tr>
                    )}
                </tbody>
            </Table>
        </Card>
    )
}

export { Report };