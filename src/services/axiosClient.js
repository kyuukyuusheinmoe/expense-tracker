import axios from "axios";
import Router from "next/router";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
    headers: {
      'Accept': 'application/vnd.GitHub.v3+json',
      //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
});

axiosClient.interceptors.response.use (response => {
  return response
}, error => {
  if (error.response.status === 401) {
    Router.push('/auth/login')
  }})

export const fetcher = (url) => axiosClient.get(url).then(res=> res.data).catch(e => {data: null})