import axios from 'axios';
const instance = axios.create({baseURL: 'http://localhost:8080'});

export default {
  get: instance.get,
  post: instance.post,
};
