import noneTokHttp from "./noneTokenHttpSerrvice";
import http from "./httpService";
import formDataHttp from "./formDataHttpService";
import {apiUrl} from "./config";

export const getProfile = () => {
    return http.get(`${apiUrl}auth/profile`);
};