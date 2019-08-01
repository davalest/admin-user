import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ArrowIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ( {
        root: {
            padding: theme.spacing(5, 10),
            flex: 1
        },
        avatar: {
            margin: "auto",
            width: 60,
            height: 60,
        },
        label: {
            fontWeight: "bold",
            color: "#1769aa"
        },
        icons: {
            position: "fixed",
            bottom: 10,
            right: 10,
            zIndex: 999,
            "&:focus": {
                outline: 0
            }
        },
        editIcon: {
            "&:hover": {
                backgroundColor: "#f5f5f5",
                borderRadius: "50%"
            }
        }
    }
));

const ProfileCard = (props) => {
    const classes = useStyles();
    return (
        <div className="row">
            <Fab size="medium"
                 color="primary"
                 aria-label="Back"
                 className={classes.icons}
                 onClick={props.setOnClickBack}
            >
                <ArrowIcon />
            </Fab>
            <div className="col-12 d-flex justify-content-center align-items-center">
                <Paper className={classes.root}>
                    <div className="d-flex justify-content-end">
                        <EditIcon className={classes.editIcon}
                                  onClick={props.onEdit}
                        />
                    </div>

                    <Avatar alt="profile picture"
                            src={props.profilePicture}
                            className={classes.avatar}
                    />
                    <p className="mt-4">
                        <span className={classes.label}>Email:</span> {props.email}
                    </p>
                    <p>
                        <span className={classes.label}>First Name:</span> {props.firstName}
                    </p>
                    <p>
                        <span className={classes.label}>Last Name:</span> {props.lastName}
                    </p>
                </Paper>
            </div>
        </div>
    );
};

export default ProfileCard;