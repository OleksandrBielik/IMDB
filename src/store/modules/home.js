import { TMDBAPI } from '@/api/tmdb-api';

export const home = {
  namespaced: true,
  state: () => ({
    trendingList: []
  }),
  mutations: {
    setTrending(state, items) {
      state.trendingList = [...items]
      console.log(state.trendingList)
    },
  },
  actions: {
    async fetchTrending({ commit }) {
      const res = await TMDBAPI.getTrending()
      commit('setTrending', res.data.results)
    },
  },
  getters: {
    getTrending: (state) => state.trendingList
  },
}