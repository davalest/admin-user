import { combineReducers } from "redux";
import * as actions from "./actions.js";

const APP_DEFAULT = {
    scene: "login"
};
const app = (state = APP_DEFAULT, action) => {
    switch (action.type) {
        case actions.APP:
            return {
                uid: action.uid ? action.uid : null,
                scene: action.scene
            };
        case actions.SEND_LIST_USERS:
            return {
                ...state,
                listUsers: action.data,
                load: true
            };
        case actions.SEND_CREATE_USERS:
            return {
                ...state,
                loadCreate: true
            };
        default:
            return state;
    }
};

export const combinedReducers = combineReducers({ app });
