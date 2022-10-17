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
  search({ page, query }) {
    const url = '/search/multi'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page, query } })
  },
  getTrending({ page }) {
    const url = '/trending/all/week'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
  },
  getUpcoming() {
    const url = '/movie/upcoming'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY } })
  },
  getPopular({ page }) {
    const url = '/person/popular'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
  },
  getOnAir({ page }) {
    const url = '/tv/on_the_air'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
  },
  getMovie({ id }) {
    const url = `/movie/${id}`
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, append_to_response: 'videos,images', id } })
  },
  getSimilar({ id, page }) {
    const url = `/movie/${id}/similar`
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, id, page } })
  }
};