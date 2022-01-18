import axios from 'axios';
import VARIABLES from './.env';


const instance = axios.create({
  baseURL: VARIABLES.axiosBaseURL,
});

export default instance;