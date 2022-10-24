import { TMDBAPI } from '@/api/tmdb-api';

export const tv = {
  namespaced: true,
  state: () => ({
    tvData: {},
    similarList: [],
    creditsList: [],
    imagesList: [],
    videosList: [],
  }),
  mutations: {
    setTv(state, data) {
      state.tvData = { ...data }
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
      console.log(state.videosList)
    },
  },
  actions: {
    async fetchTv({ commit }, { id }) {
      const res = await TMDBAPI.tv.getTv({ id })
      res.data.images.backdrops.map(item => {
        item.media_type = 'image'
        item.card_type = 'flick'
      })
      res.data.videos.results.map(item => {
        item.media_type = 'video'
        item.card_type = 'flick'
      })
      console.log(res.data.images)
      commit('setTv', res.data)
      commit('setVideos', res.data.videos.results)
      commit('setImages', res.data.images.backdrops)
    },
    async fetchSimilar({ commit }, { id, page }) {
      const res = await TMDBAPI.getSimilar({ id, page, type: 'tv' })
      res.data.results.map(item => {
        item.media_type = 'tv'
        item.card_type = 'flick'
      })
      commit('setSimilar', res.data.results)
    },
    async fetchCredits({ commit }, { id, page }) {
      const res = await TMDBAPI.getCredits({ id, page, type: 'tv' })
      res.data.cast.map(item => {
        item.media_type = 'person'
        item.card_type = false
      })
      commit('setCredits', res.data.cast)
    },
  },
  getters: {
    getData: (state) => state.tvData,
    getSimilar: (state) => state.similarList,
    getCredits: (state) => state.creditsList,
    getImages: (state) => state.imagesList,
    getVideos: (state) => state.videosList,
  },
}