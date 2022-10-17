import { TMDBAPI } from '@/api/tmdb-api';

export const movie = {
  namespaced: true,
  state: () => ({
    movieData: {},
    similarList: []
  }),
  mutations: {
    setMovie(state, data) {
      state.movieData = { ...data }
    },
    setSimilar(state, items) {
      state.similarList = [...items]
    },
  },
  actions: {
    async getMovie({ commit }, { id }) {
      const res = await TMDBAPI.getMovie({ id })
      console.log(res)
      commit('setMovie', res.data)
    },
    async fetchSimilar({ commit }, { id, page }) {
      const res = await TMDBAPI.getSimilar({ id, page })
      res.data.results.map(item => {
        item.media_type = 'movie'
        item.card_type = 'flick'
      })
      console.log(res)
      commit('setSimilar', res.data.results)
    },
  },
  getters: {
    getData: (state) => state.movieData,
    getSimilar: (state) => state.similarList,
  },
}