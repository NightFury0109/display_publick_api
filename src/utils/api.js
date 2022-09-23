import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.publicapis.org/',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      console.log(err);
    }
    return Promise.reject(err);
  }
);

export default api;
