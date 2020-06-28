import Axios from 'axios';
import { BASE_URL } from './constants';

export function apiCaller({url = '', params = {}} = {}) {
  return Axios({
    method: 'GET',
    baseURL: BASE_URL,
    url,
    params,
    responseType: 'json',
  })
    .then(({data: resp}) => resp)
    .catch(error => {
      throw error;
    });
}
