import axios from 'axios';
import https from 'https';


const instance = axios.create({
  baseURL: 'http://localhost:1337/',
});

export default instance;