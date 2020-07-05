import React from 'react';
import Modal from 'react-modal';
import { convertDate } from './utilities';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const ModalReport = ({ report, modalIsOpen, openModal }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => { openModal() }}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div>
                <h2>
                    {report.name}
                </h2>
                <hr></hr>
                <div>
                    <div>
                        <label>Company : {report.companyName}<p></p></label>
                        <label>Interview Date : {convertDate(report.interviewDate)}<p></p></label>
                        <label>Phase : {report.phase}<p></p></label>
                        <label>Status : {report.status}<p></p></label>
                    </div>
                    <div>
                        <label>Description : {report.description}<p></p></label>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export { ModalReport }