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
  movie: {
    getUpcoming({ page }) {
      const url = '/movie/upcoming'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getPopular({ page }) {
      const url = '/movie/popular'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getTopRated({ page }) {
      const url = '/movie/top_rated'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getNowPlaying({ page }) {
      const url = '/movie/now_playing'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getMovie({ id }) {
      const url = `/movie/${id}`
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, append_to_response: 'videos,images', id } })
    },
  },
  tv: {
    getOnAir({ page }) {
      const url = '/tv/on_the_air'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getPopular({ page }) {
      const url = '/tv/popular'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getTopRated({ page }) {
      const url = '/tv/top_rated'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getTv({ id }) {
      const url = `/tv/${id}`
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, append_to_response: 'videos,images', id } })
    },
  },
  person: {
    getPopular({ page }) {
      const url = '/person/popular'
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
    },
    getPerson({ id }) {
      const url = `/person/${id}`
      return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, append_to_response: 'videos,images', id } })
    },
  },
  search({ page, query }) {
    const url = '/search/multi'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page, query } })
  },
  getTrending({ page }) {
    const url = '/trending/all/week'
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, page } })
  },
  getSimilar({ id, page, type }) {
    const url = `/${type}/${id}/similar`
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, id, page } })
  },
  getCredits({ id, page, type }) {
    const url = `/${type}/${id}/credits`
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, id, page } })
  },
  getCombinedCredits({ id, page }) {
    const url = `/person/${id}/combined_credits`
    return DefaultAPIInstance.get(url, { params: { api_key: process.env.VUE_APP_API_KEY, id, page } })
  }

};