import TOKEN_KEY from '@/common/enums/storage';

const TokenService = {
  getToken() { return localStorage.getItem(JSON.stringify(TOKEN_KEY)); },

  saveToken(accessToken: string) {
    return localStorage.setItem(JSON.stringify(TOKEN_KEY), accessToken);
  },

  removeToken() {
    return localStorage.removeItem(JSON.stringify(TOKEN_KEY));
  },
};

export default TokenService;
