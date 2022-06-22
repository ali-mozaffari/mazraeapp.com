import noneTokHttp from "./noneTokenHttpSerrvice";
import http from "./httpService";
import formDataHttp from "./formDataHttpService";
import {apiUrl} from "./config";

export const sendCode = user => {
    return noneTokHttp.post(`${apiUrl}auth/send-code`, user);
};

export const loginUser = user => {
    return noneTokHttp.post(`${apiUrl}auth/login`, user);
};

export const getProfile = () => {
    return http.get(`${apiUrl}auth/profile`);
};

export const putProfile = user => {
    return formDataHttp.put(`${apiUrl}auth/edit-profile`, user);
};
