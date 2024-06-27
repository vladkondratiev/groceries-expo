/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';

export interface RequestConfig {
  baseURL?: string;
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export type Response<T = any> = AxiosResponse<T>;
export type RequestPromise<T = any> = Promise<Response<T>>;
export type RequestData = Record<string, any>;
