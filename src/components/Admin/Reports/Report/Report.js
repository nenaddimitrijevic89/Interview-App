import React from 'react';
import style from './Report.module.css';
import { Card, Table } from 'react-materialize';
import { convertDate } from '../../../../shared/utilities';
import { ModalReport } from '../../../../shared/ModalReport/ModalReport';

const Report = ({ reports, modalIsOpen, openModal, report, deleteReport }) => {

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
                                <td><i className="fa fa-eye" onClick={() => openModal(report)}></i></td>
                                <td><i className="fa fa-close" onClick={() => deleteReport(report.id)}></i></td>

                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card>
        </>
    )
}

export { Report };