import axios from 'axios';
import { URL_ADDRESS } from './urlconstant';


const axiosClient = axios.create();

axiosClient.defaults.baseURL = URL_ADDRESS;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

// //All request will wait 2 seconds before timeout
 axiosClient.defaults.timeout = 2000;

 axiosClient.defaults.withCredentials = false;

export function getRequest(URL) {
    return axiosClient.get(`/${URL}`).then(response => response);
  }
  
  export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
  }
  
  export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
  }
  
  export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response);
  }