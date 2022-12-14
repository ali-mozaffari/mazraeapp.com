import axios from "axios";

axios.defaults.headers.get["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";


axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        // toast.error("Server Responded An Error Try Again", {
        //     position: "top-right",
        //     closeOnClick: true,
        // });
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
