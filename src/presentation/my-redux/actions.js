import { combineEpics } from "redux-observable";
import { dataRepository } from "data";
import { Observable } from "rxjs";


export const ERROR = "ERROR";
export const error = error => {
    return {
        type: ERROR,
        error: error
    };
};


export const APP = "APP";
export const CREATE_USERS_DISPATCH = "CREATE_USERS_DISPATCH";
export const SEND_CREATE_USERS = "SEND_CREATE_USERS";
export const LIST_USERS_DISPATCH = "LIST_USERS_DISPATCH";
export const SEND_LIST_USERS = "SEND_LIST_USERS";


export const listUsersDispatch = () => {
    return {
        type: LIST_USERS_DISPATCH
    };
};

export const createUsersDispatch = (name, job) => {
    return {
        type: CREATE_USERS_DISPATCH,
        name,
        job
    };
};

export const sendListUsers = (data) => {
    return {
        type: SEND_LIST_USERS,
        data
    };
};

export const sendCreateUsers = () => {
    return {
        type: SEND_CREATE_USERS
    };
};



export const app = user => {
    return {
        type: APP,
        uid: user.userId,
        scene: user.userId ? "home" : "login"
    };
};

const listUsersEpic = action$ =>
    action$.ofType(LIST_USERS_DISPATCH).mergeMap(action =>
        dataRepository
            .getListUsers()
            .map(sendListUsers)
            .catch(err => Observable.of(err(err)))
    );

const createUsersEpic = action$ =>
    action$.ofType(CREATE_USERS_DISPATCH).mergeMap(action =>
        dataRepository
            .createUsers(action.name, action.job)
            .map(sendCreateUsers)
            .catch(err => Observable.of(err(err)))
    );


export const combinedEpics = combineEpics(
    listUsersEpic,
    createUsersEpic
);