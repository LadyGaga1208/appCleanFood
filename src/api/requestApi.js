import axios from 'axios';
import * as api from './api';
import { store } from '../redux/store';
const TIMEOUT = 5000;

export const GetApi = (url) => {
  let accessToken = store.getState().auth.userdata ? store.getState().auth.userdata.token : null;
  return axios({
    url: url,
    method: 'get',
    baseURL: api.baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'validateToken': `${accessToken}`
    },
    responseType: 'json',
    responseEncoding: 'utf8',
  });
}
export const PostApi = (url, params) => {
  // let accessToken = store.getState().auth.userdata ? store.getState().auth.userdata.token : null;
  return axios({
    url: url,
    method: 'post',
    baseURL: api.baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'validateToken': `${accessToken}`
    },
    data: params,
    // responseType: 'json',
    // responseEncoding: 'utf8',
  });
}
