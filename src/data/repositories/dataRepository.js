import * as apiDataSource from "../datasources/apiDataSource";
import { Observable } from "rxjs";

export const getListUsers = () => {
    return Observable.from(apiDataSource.getListUsers())
        .take(1)
        .catch(error => {
            throw error;
        });
};

export const createUsers = (name, job) => {
    return Observable.from(apiDataSource.createUsers(name, job))
        .take(1)
        .catch(error => {
            throw error;
        });
};