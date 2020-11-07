import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 2500,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

export default API;
