import { getCookie } from "@/utils";
import axios from "axios";

axios.interceptors.request.use((config) => {
    config.headers.Authorization = getCookie('access_token') ? `Bearer ${getCookie('access_token')}` : '';
    return config;
}, (err) => {
    return Promise.reject(err.response);
});

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error);
    // const {
        //     config,
    //     response: {status, data}
    // } = error;
    if (status === 401) {
        // unauthorized
    } else if (status === 403) {
        // forbidden
    }
});