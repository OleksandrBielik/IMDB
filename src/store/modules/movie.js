import { TMDBAPI } from '@/api/tmdb-api';

export const movie = {
  namespaced: true,
  state: () => ({
    movieData: {},
    similarList: [],
    creditsList: [],
    imagesList: [],
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
    setImages(state, items) {
      state.imagesList = [...items]
    },
  },
  actions: {
    async fetchMovie({ commit }, { id }) {
      const res = await TMDBAPI.getMovie({ id })
      res.data.images.backdrops.map(item => {
        item.media_type = 'image'
        item.card_type = 'flick'
      })
      commit('setMovie', res.data)
      commit('setImages', res.data.images.backdrops)
    },
    async fetchSimilar({ commit }, { id, page }) {
      const res = await TMDBAPI.getSimilar({ id, page, type: 'movie' })
      res.data.results.map(item => {
        item.media_type = 'movie'
        item.card_type = 'flick'
      })
      commit('setSimilar', res.data.results)
    },
    async fetchCredits({ commit }, { id, page }) {
      const res = await TMDBAPI.getCredits({ id, page, type: 'movie' })
      res.data.cast.map(item => {
        item.media_type = 'person'
        item.card_type = false
      })
      commit('setCredits', res.data.cast)
    },
  },
  getters: {
    getData: (state) => state.movieData,
    getSimilar: (state) => state.similarList,
    getCredits: (state) => state.creditsList,
    getImages: (state) => state.imagesList,
  },
}