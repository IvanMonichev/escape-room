import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import Token from './Token';

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

  return api;
};
