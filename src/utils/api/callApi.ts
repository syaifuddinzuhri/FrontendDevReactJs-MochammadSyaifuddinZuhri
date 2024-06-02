import type {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import axiosClient from "axios";

const instance = axiosClient.create({
  baseURL: "https://open-api.digitalproduction.id/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => console.error(error)
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response) {
      return Promise.reject(err);
    }
    if (err.request) {
      return Promise.reject(err.request);
    }

    return Promise.reject(err.message);
  }
);

const axios = <T>(config: AxiosRequestConfig) =>
  instance.request<unknown, T>(config);

export default axios;
