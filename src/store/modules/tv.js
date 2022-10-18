import { TMDBAPI } from '@/api/tmdb-api';

export const tv = {
  namespaced: true,
  state: () => ({
    tvData: {},
    similarList: [],
    creditsList: []
  }),
  mutations: {
    setTv(state, data) {
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
    async fetchTv({ commit }, { id }) {
      const res = await TMDBAPI.getTv({ id })
      console.log(res)
      commit('setTv', res.data)
    },
    async fetchSimilar({ commit }, { id, page }) {
      const res = await TMDBAPI.getSimilar({ id, page, type: 'tv' })
      res.data.results.map(item => {
        item.media_type = 'tv'
        item.card_type = 'flick'
      })
      console.log(res)
      commit('setSimilar', res.data.results)
    },
    async fetchCredits({ commit }, { id, page }) {
      const res = await TMDBAPI.getCredits({ id, page, type: 'tv' })
      res.data.cast.map(item => {
        item.media_type = 'person'
        item.card_type = false
      })
      console.log(res)
      commit('setCredits', res.data.cast)
    },
  },
  getters: {
    getData: (state) => state.tvData,
    getSimilar: (state) => state.similarList,
    getCredits: (state) => state.creditsList,
  },
}