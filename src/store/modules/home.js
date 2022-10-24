import { TMDBAPI } from '@/api/tmdb-api';

export const home = {
  namespaced: true,
  state: () => ({
    trendingList: [],
    upcomingList: [],
    popularList: [],
    onAirList: [],
    recentlyList: JSON.parse(localStorage.getItem('items')) || [],
  }),
  mutations: {
    setTrending(state, items) {
      state.trendingList = [...items]
    },
    setUpcoming(state, items) {
      state.upcomingList = [...items]
    },
    setPopular(state, items) {
      state.popularList = [...items]
    },
    setOnAir(state, items) {
      state.onAirList = [...items]
    },
    addRecently(state, item) {
      state.recentlyList.push(item)
    },
    removeRecently(state) {
      state.recentlyList = []
      localStorage.removeItem('items')
    }
  },
  actions: {
    async fetchTrending({ commit }, { page }) {
      const res = await TMDBAPI.getTrending({ page })
      res.data.results.map(item => {
        item.card_type = 'flick'
      })
      commit('setTrending', res.data.results)
    },
    async fetchUpcoming({ commit }, { page }) {
      const res = await TMDBAPI.movie.getUpcoming({ page })
      res.data.results.map(item => {
        item.media_type = 'movie'
        item.card_type = false
      })
      commit('setUpcoming', res.data.results)
    },
    async fetchPopular({ commit }, { page }) {
      const res = await TMDBAPI.person.getPopular({ page })
      res.data.results.map(item => {
        item.media_type = 'person'
        item.card_type = false
      })
      commit('setPopular', res.data.results)
    },
    async fetchOnAir({ commit }, { page }) {
      const res = await TMDBAPI.tv.getOnAir({ page })
      res.data.results.map(item => {
        item.media_type = 'tv'
        item.card_type = false
      })
      commit('setOnAir', res.data.results)
    },
    addRecently({ commit }, { item }) {
      commit('addRecently', item)
    },
    removeRecently({ commit }) {
      commit('removeRecently')
    },
  },
  getters: {
    getTrending: (state) => state.trendingList,
    getUpcoming: (state) => state.upcomingList,
    getPopular: (state) => state.popularList,
    getOnAir: (state) => state.onAirList,
    getRecently: (state) => state.recentlyList,
  },
}