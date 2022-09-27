import { DefaultAPIInstance } from '@/api';

export const TMDBAPI = {
  // login(login, password) {
  //   const url = '/login';
  //   const data = { login, password };
  //   return LoginAPIInstance.post(url, data);
  // },
  // logout() {
  //   const url = '/logout';
  //   return DefaultAPIInstance.post(url);
  // },
  search({ page }) {
    const url = '/search/multi'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page, query: 'rambo' } })
  },
};