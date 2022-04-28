import axios from 'axios';
import TokenService from './storage.service';

const ApiService = {
  init(baseUrl: string) {
    axios.defaults.baseURL = baseUrl;
  },

  setHeaders() {
    axios.defaults.headers.common.Authorization = `Bearer ${TokenService.getToken()}`;
  },

  removeHeaders() {
    axios.defaults.headers.common = {};
  },

  get: ({ url }: { url: string }) => axios({
    method: 'get',
    url,
  }),
};

export default ApiService;
