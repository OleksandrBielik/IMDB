import { TMDBAPI } from '@/api/tmdb-api';

export const search = {
  namespaced: true,
  state: () => ({
    itemList: [],
    page: 1
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = [...items]
      console.log(state.itemList)
    },
    setPage(state, page) {
      state.page = page
    },
  },
  actions: {
    async onSearch({ commit }, { page = 1, query }) {
      const res = await TMDBAPI.search({ page, query })
      commit('setItems', res.data.results)
      commit('setPage', res.data.page)
    },
  },
  getters: {
    getItems: (state) => state.itemList,
    getPage: (state) => state.page
  },
}