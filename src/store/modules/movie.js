import { TMDBAPI } from '@/api/tmdb-api';

export const movie = {
  namespaced: true,
  state: () => ({
    movieData: {},
    similarList: [],
    creditsList: []
  }),
  mutations: {
    setMovie(state, data) {
      state.movieData = { ...data }
    },
    setSimilar(state, items) {
      state.similarList = [...items]
    },
    setCredits(state, items) {
      state.creditsList = [...items]
    },
  },
  actions: {
    async fetchMovie({ commit }, { id }) {
      const res = await TMDBAPI.getMovie({ id })
      console.log(res)
      commit('setMovie', res.data)
    },
    async fetchSimilar({ commit }, { id, page }) {
      const res = await TMDBAPI.getSimilar({ id, page, type: 'movie' })
      res.data.results.map(item => {
        item.media_type = 'movie'
        item.card_type = 'flick'
      })
      console.log(res)
      commit('setSimilar', res.data.results)
    },
    async fetchCredits({ commit }, { id, page }) {
      const res = await TMDBAPI.getCredits({ id, page, type: 'movie' })
      res.data.cast.map(item => {
        item.media_type = 'person'
        item.card_type = false
      })
      console.log(res)
      commit('setCredits', res.data.cast)
    },
  },
  getters: {
    getData: (state) => state.movieData,
    getSimilar: (state) => state.similarList,
    getCredits: (state) => state.creditsList,
  },
}