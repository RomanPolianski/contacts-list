import axios from 'axios';

export const API_URL = 'http://localhost:5000/api';

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;