import axios from 'axios';
import https from 'https';
import VARIABLES from './.env';


const instance = axios.create({
  baseURL: VARIABLES.axiosBaseURL,
});

export default instance;