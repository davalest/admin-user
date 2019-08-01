import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const CreateDialog = (props) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    function handleClose() {
        props.onClose()
    }

    return (
        <Dialog onClose={handleClose}
                aria-labelledby="simple-dialog-title"
                open={props.open}
        >
            <DialogTitle id="simple-dialog-title">Add user</DialogTitle>
            <form onSubmit={props.sendInfo}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    style={{ marginRight: 5 }}
                    onChange={e => {
                        setName(e.target.value )
                    }}
                />
                <br />
                <input
                    className="form-control"
                    type="text"
                    placeholder="job"
                    style={{ marginRight: 5 }}
                    onChange={e => {
                        setJob(e.target.value)
                    }}
                />
                <input type="submit" value="Create"/>
            </form>
        </Dialog>
    );
};

export default CreateDialog;