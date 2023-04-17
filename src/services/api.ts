import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

import Token from './Token';
import { toast } from 'react-toastify';

const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    const token = Token.get();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (err: AxiosError) => {
      toast.dismiss();
      toast.warn(err.message);
    }
  );

  return api;
};
