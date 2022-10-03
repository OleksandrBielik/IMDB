import { TMDBAPI } from '@/api/tmdb-api';

export const home = {
  namespaced: true,
  state: () => ({
    trendingList: [],
    upcomingList: [],
    popularList: [],
    onAirList: [],
    recentlyList: [],
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
    setPopular(state, items) {
      state.popularList = [...items]
      console.log(state.popularList)
    },
    setOnAir(state, items) {
      state.onAirList = [...items]
      console.log(state.onAirList)
    },
    addRecently(state, items) {
      state.recentlyList.push(items)
      console.log(state.recentlyList)
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
    async fetchPopular({ commit }) {
      const res = await TMDBAPI.getPopular()
      commit('setPopular', res.data.results)
    },
    async fetchOnAir({ commit }) {
      const res = await TMDBAPI.getOnAir()
      commit('setOnAir', res.data.results)
    },
    // addRecently({ commit }, {}) {
    //   commit('addRecently', res.data.results)
    // },
  },
  getters: {
    getTrending: (state) => state.trendingList,
    getUpcoming: (state) => state.upcomingList,
    getPopular: (state) => state.popularList,
    getOnAir: (state) => state.onAirList,
  },
}