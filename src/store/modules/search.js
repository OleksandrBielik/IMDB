import { TMDBAPI } from '@/api/tmdb-api';

export const search = {
  namespaced: true,
  state: () => ({
    itemList: [],
    page: undefined,
    totalPages: undefined,
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = [...items]
    },
    setPage(state, page) {
      state.page = page
    },
    setTotalPages(state, pages) {
      state.totalPages = pages
    },
  },
  actions: {
    async onSearch({ commit }, { page, query }) {
      const res = await TMDBAPI.search({ page, query })
      const filteredRes = res.data.results.filter(item => item.poster_path)
      commit('setItems', filteredRes)
      commit('setPage', res.data.page)
      commit('setTotalPages', res.data.total_pages)
    },
    setPage({ commit }, { page }) {
      commit('setPage', page)
    }
  },
  getters: {
    getItems: (state) => state.itemList,
    getPage: (state) => state.page,
    getTotalPages: (state) => state.totalPages,
  },
}