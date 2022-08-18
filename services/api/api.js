import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
};

const axiosInstance = axios.create({
  baseURL: '/api/v1/',
  headers: headers,
  crossdomain: true
});

export default axiosInstance;
