import ApiService from '@/services/api.service';

const BASE_URL = 'http://localhost:3000/';

export default {
  install: () => {
    ApiService.init(BASE_URL);
  },
};
