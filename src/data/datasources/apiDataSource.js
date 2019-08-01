const axios = require("axios");

axios.defaults.baseURL = "https://reqres.in/api";

export const getListUsers = () => {
    return new Promise((resolve, reject) => {
        axios
            .get("users/", {})
            .then(response => {
                resolve((response.data.data));
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const createUsers = (name, job) => {
    return new Promise((resolve, reject) => {
        axios
            .post("/users", {
                name,
                job
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};