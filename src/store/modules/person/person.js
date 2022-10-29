import { TMDBAPI } from '@/api/tmdb-api';

export const person = {
  namespaced: true,
  state: () => ({
    personData: {},
    creditsList: [],
    imagesList: [],
    loading: true
  }),
  mutations: {
    setPerson(state, data) {
      state.personData = { ...data }
      setTimeout(() => state.loading = false, 1500)
    },
    setCredits(state, items) {
      state.creditsList = [...items]
    },
    setImages(state, items) {
      state.imagesList = [...items]
    },
  },
  actions: {
    async fetchPerson({ commit }, { id }) {
      const res = await TMDBAPI.person.getPerson({ id })
      res.data.images.profiles.map(item => {
        item.media_type = 'image'
        item.card_type = 'flick'
      })
      console.log(res.data)
      commit('setPerson', res.data)
      commit('setImages', res.data.images.profiles)
    },
    async fetchCredits({ commit }, { id, page }) {
      const res = await TMDBAPI.person.getCombinedCredits({ id, page })
      res.data.cast.map(item => {
        item.card_type = 'flick'
      })
      console.log(res.data.cast)
      commit('setCredits', res.data.cast)
    },
  },
  getters: {
    getData: (state) => state.personData,
    getCredits: (state) => state.creditsList,
    getImages: (state) => state.imagesList,
    getLoading: (state) => state.loading,
  },
}