import React from 'react';
import { Col } from 'react-materialize';

const Note = ({ setNote }) => {
    let note;

    const handleNoteChange = (event) => {
        note = event.currentTarget.value;
        setNote(note);
    }

    const onChangeNote = (event) => {
        handleNoteChange(event);
    }

    return (
        <Col l={12}>

            <div className="row">
                <form className="col s12">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" onChange={onChangeNote}></textarea>
                        <label htmlFor="textarea1">Notes:</label>
                    </div>
                </form>
            </div>

        </Col>
    )
}

export { Note };