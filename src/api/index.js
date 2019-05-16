import axios from 'axios';
import * as Api from './api';

const axiosInstance = axios.create({
  baseURL: Api.baseURL,
  timeout: Api.TIMEOUT
});

export default axiosInstance;
