import { TMDBAPI } from '@/api/tmdb-api';

export const person = {
  namespaced: true,
  state: () => ({
    personData: {},
    similarList: [],
    creditsList: [],
    imagesList: [],
    videosList: [],
  }),
  mutations: {
    setPerson(state, data) {
      state.personData = { ...data }
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
    async fetchPerson({ commit }, { id }) {
      const res = await TMDBAPI.getPerson({ id })
      res.data.images.profiles.map(item => {
        item.media_type = 'image'
        item.card_type = 'flick'
      })
      console.log(res.data)
      commit('setPerson', res.data)
      commit('setImages', res.data.images.profiles)
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
      const res = await TMDBAPI.getCombinedCredits({ id, page })
      res.data.cast.map(item => {
        item.card_type = 'flick'
      })
      console.log(res.data.cast)
      commit('setCredits', res.data.cast)
    },
  },
  getters: {
    getData: (state) => state.personData,
    getSimilar: (state) => state.similarList,
    getCredits: (state) => state.creditsList,
    getImages: (state) => state.imagesList,
    getVideos: (state) => state.videosList,
  },
}