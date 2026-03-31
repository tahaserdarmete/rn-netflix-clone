import axios from 'axios';
import { BASE_URL } from './url';
import { TMDB_API_KEY } from '@env';

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.headers = {
  accept: 'application/json',
  Authorization: `Bearer ${TMDB_API_KEY}`,
};
Client.interceptors.request.use(
  function (config) {
    config.params = {
      language: 'en-EN',
      page: 1,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default Client;
