import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
    headers: {
        Accept: "application/json"
    }
  });

export const fetcher = (url) => axiosClient.get(url)