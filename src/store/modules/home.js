import { TMDBAPI } from '@/api/tmdb-api';

export const home = {
  namespaced: true,
  state: () => ({
    trendingList: [],
    upcomingList: [],
  }),
  mutations: {
    setTrending(state, items) {
      state.trendingList = [...items]
      console.log(state.trendingList)
    },
    setUpcoming(state, items) {
      state.upcomingList = [...items]
      console.log(state.upcomingList)
    },
  },
  actions: {
    async fetchTrending({ commit }) {
      const res = await TMDBAPI.getTrending()
      const filteredRes = res.data.results.filter(item => item.media_type !== 'person')
      commit('setTrending', filteredRes)
    },
    async fetchUpcoming({ commit }) {
      const res = await TMDBAPI.getUpcoming()
      commit('setUpcoming', res.data.results)
    },
  },
  getters: {
    getTrending: (state) => state.trendingList,
    getUpcoming: (state) => state.upcomingList
  },
}