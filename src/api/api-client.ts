import Axios from 'axios';

import { RequestConfig, RequestData, RequestPromise } from './api.types';

export const axios = Axios.create({
  baseURL: 'http://localhost:3000',
});

export const apiClient = {
  get<T>(route: string, config?: RequestConfig): RequestPromise<T> {
    return axios.get(route, config);
  },
  post<T>(route: string, data?: RequestData, config?: RequestConfig): RequestPromise<T> {
    return axios.post(route, data, config);
  },
  put<T>(route: string, data?: RequestData, config?: RequestConfig): RequestPromise<T> {
    return axios.put(route, data, config);
  },
  patch<T>(route: string, data?: RequestData, config?: RequestConfig): RequestPromise<T> {
    return axios.patch(route, data, config);
  },
  delete<T>(route: string, config?: RequestConfig): RequestPromise<T> {
    return axios.delete(route, config);
  },
};
