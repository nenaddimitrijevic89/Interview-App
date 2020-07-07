import React from 'react';
import Modal from 'react-modal';
import { convertDate } from '../utilities';
import { customStyles } from '../constants';
import style from './ModalReport.module.css';
import { Container, Row, Col } from 'react-materialize';

const ModalReport = ({ report, modalIsOpen, openModal }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            style={customStyles}
            contentLabel="modal"
        >
            <Container className={style.back}>
                <h2 className={style.name}>
                    {report.name}
                </h2>
                <hr></hr>
                <Row>
                    <Col>
                        <h5>Company : <span className={style.info}>{report.companyName}</span></h5>
                        <h5>Interview Date : <span className={style.info}>{convertDate(report.interviewDate)}</span></h5>
                        <h5>Phase : <span className={style.info}>{report.phase}</span></h5>
                        <h5>Status : <span className={style.info}>{report.status}</span></h5>
                    </Col>
                    <Col>
                        <h5>Description : <span className={style.description}>{report.note}</span></h5>
                    </Col>
                </Row>
            </Container>
        </Modal>
    )
}

export { ModalReport }