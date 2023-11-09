import { axiosClient } from "../utils/api/axiosClient";

export const createTransction = (data) => {
  return axiosClient.post('/transaction/create', {
        ...data
    }).then(response => {
      return response
    }).catch(error => {
      console.error('Error posting data:', error);
      return error;
    });
}