import React from 'react';
import { Col, Textarea } from 'react-materialize';

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
            <Textarea
                required
                id='reportNotes'
                label="Notes: "
                onChange={onChangeNote}
            />

            {/* <div class="row">
                <form class="col s12">
                    <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea" onChange={onChangeNote}></textarea>
                        <label htmlFor="textarea1">Textarea</label>
                    </div>
                </form>
            </div> */}

        </Col>
    )
}

export { Note };