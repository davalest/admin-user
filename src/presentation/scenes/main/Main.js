import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "my-redux";
import UserList from "../../components/list/UserList";
import ProfileCard from "../../components/profile/ProfileCard";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CreateDialog from "../../components/dialogs/CreateDialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ( {
    icons: {
        position: "fixed",
        bottom: 10,
        right: 10,
        zIndex: 999,
        "&:focus": {
            outline: 0
        }
    }
} ));


const Main = (props) => {
    const {
        listUsersDispatch,
        createUsersDispatch
    } = props;
    const classes = useStyles();
    const [isUserSelected, setIsUserSelected] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isAddUserSelected, setIsAddUserSelected] = useState(false);
    const [dialogAddOpen, setDialogAddOpen] = useState(false);
    const [info, setInfo] = useState(null);

    // Load user data
    useEffect(() => {
        listUsersDispatch();
    }, [listUsersDispatch, props.loadCreate]);

    useEffect(() => {
        if (info !== null) createUsersDispatch(info.name, info.job)
    }, [createUsersDispatch,dialogAddOpen]);

    const onAddUser = () => {
        setIsAddUserSelected(true)
    };

    const onRowClick = (row) => {
        setSelectedUser(row);
        setIsUserSelected(true);
    };

    const onClickBack = () => {
        setIsUserSelected(false)
    };

    const onClose = () => {
        setDialogAddOpen(false)
    };

    const getInfo = (e) => {
        e.preventDefault();
        setDialogAddOpen(false);
        setInfo({
            name: e.target[0].value,
            job: e.target[1].value
        })
    };

    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            {props.load ?
                <div
                    className="container-fluid"
                    style={{ paddingTop: 20 }}
                >
                    <Fab size="medium"
                         color="primary"
                         aria-label="Back"
                         className={classes.icons}
                         onClick={() => {
                             setDialogAddOpen(true)
                         }}
                    >
                        <AddIcon />
                    </Fab>
                    <CreateDialog
                        sendInfo={e => {
                            getInfo(e)
                        }}
                        onClose={onClose}
                        open={dialogAddOpen}
                    />
                    <div className="row align-items-center">
                        {isUserSelected ?
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <ProfileCard
                                    profilePicture={selectedUser.avatar}
                                    email={selectedUser.email}
                                    firstName={selectedUser.first_name}
                                    lastName={selectedUser.last_name}
                                    setOnClickBack={onClickBack}
                                />
                            </div>
                            :
                            <div className="col-12">
                                <UserList
                                    items={props.listUsers}
                                    setOnRowClick={row => onRowClick(row)}
                                    setOnAddUser={onAddUser}
                                />
                            </div>
                        }
                        {isAddUserSelected ?
                            <div>
                                HOLA
                            </div> : ""
                        }
                    </div>
                </div>
                : "loading"}
        </div>

    );
};

const listUsersDispatch = actions.listUsersDispatch;
const createUsersDispatch = actions.createUsersDispatch;

const meDispatch = actions.meDispatch;
const logoutDispatch = actions.logoutDispatch;

export default connect(
    (appState, ownProps) => ( {
        listUsers: appState.app.listUsers,
        loadCreate: appState.app.loadCreate,
        load: appState.app.load,
        scene: appState.app.scene
    } ),
    dispatch =>
        bindActionCreators(
            {
                listUsersDispatch,
                createUsersDispatch,
                meDispatch,
                logoutDispatch
            },
            dispatch
        )
)(Main);
