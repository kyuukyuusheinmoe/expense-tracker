import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
    headers: {
      'Accept': 'application/vnd.GitHub.v3+json',
      //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
});

export const fetcher = (url) => axiosClient.get(url).then(res=> res.data).catch(e => {data: null})