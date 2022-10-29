import { TMDBAPI } from '@/api/tmdb-api';

export const movie = {
  namespaced: true,
  state: () => ({
    movieData: {},
    similarList: [],
    creditsList: [],
    imagesList: [],
    videosList: [],
    loading: true,
  }),
  mutations: {
    setMovie(state, data) {
      state.movieData = { ...data }
      setTimeout(() => state.loading = false, 2000)
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
    setVideos(state, items) {
      state.videosList = [...items]
    },
  },
  actions: {
    async fetchMovie({ commit }, { id }) {
      const res = await TMDBAPI.movie.getMovie({ id })
      res.data.images.backdrops.map(item => {
        item.media_type = 'image'
        item.card_type = 'flick'
      })
      res.data.videos.results.map(item => {
        item.media_type = 'video'
        item.card_type = 'flick'
      })
      commit('setMovie', res.data)
      commit('setVideos', res.data.videos.results)
      commit('setImages', res.data.images.backdrops)
    },
    async fetchSimilar({ commit }, { id, page }) {
      const res = await TMDBAPI.common.getSimilar({ id, page, type: 'movie' })
      res.data.results.map(item => {
        item.media_type = 'movie'
        item.card_type = 'flick'
      })
      commit('setSimilar', res.data.results)
    },
    async fetchCredits({ commit }, { id, page }) {
      const res = await TMDBAPI.common.getCredits({ id, page, type: 'movie' })
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
    getVideos: (state) => state.videosList,
    getLoading: (state) => state.loading,
  },
}