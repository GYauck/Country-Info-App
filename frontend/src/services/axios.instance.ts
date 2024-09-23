import axios, { AxiosInstance } from 'axios';

export type AxiosFactory = (basePath?: string) => AxiosInstance;

export const axiosFactory: AxiosFactory = (basePath) => {
  return axios.create({
    baseURL: `http://localhost:3030${basePath ? basePath : ''}`,
  });
};
