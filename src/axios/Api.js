import axios from 'axios';

export const API_URL = 'https://contact-list-app-server.herokuapp.com/api';

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;