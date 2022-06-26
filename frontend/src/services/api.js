import { getCookie, setCookie } from "@/utils";
import axios from "axios";
import router from '@/router/index';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getCookie("access_token")
      ? `Bearer ${getCookie("access_token")}`
      : "";
    return config;
  },
  (err) => {
    return Promise.reject(err.response);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      config,
      response: { status, data },
    } = error;
    const originalRequest = error.config;
    const token = getCookie("access_token");
    if (status === 401 && !token && !config.url.endsWith("/api/token/")) {
      // logout
    } else if (status === 403) {
      // forbidden
    } else if (
      status === 401 &&
      !originalRequest._retry &&
      router.currentRoute.name !== "login"
    ) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }
      originalRequest._retry = true;
      isRefreshing = true;
      return new Promise(function (resolve, reject) {
        axios
          .post('http://localhost:8000/api/token/refresh/', {
            refresh: getCookie("refresh_token"),
          })
          .then((response) => {
            setCookie("access_token", response.data["access"], 3);
            processQueue(null, data.token);
            resolve(axios(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(error);
  }
);
