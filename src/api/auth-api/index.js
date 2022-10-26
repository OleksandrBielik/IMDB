import { DefaultAPIInstance, LoginAPIInstance } from '@/api';

export const AuthAPI = {
  login() {
    const url = '/authentication/token/new';
    return LoginAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY } });
  },
  logout() {
    const url = '/logout';
    return DefaultAPIInstance.post(url);
  },
};