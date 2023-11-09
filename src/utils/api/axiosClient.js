import axios from "axios";

console.log ('xxx NEXT_API_URL ', process.env.BASE_URL)
export const axiosClient = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000,
    headers: {
        Accept: "application/json"
    }
  });

export const fetcher = (url) => axiosClient.get(url)