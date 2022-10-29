import { TMDBAPI } from '@/api/tmdb-api';

export const tvOnAir = {
  namespaced: true,
  state: () => ({
    itemList: [],
    page: undefined,
    totalPages: undefined,
    loading: true
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = [...items]
      setTimeout(() => state.loading = false, 1500)
    },
    setPage(state, page) {
      state.page = page
    },
    setTotalPages(state, pages) {
      state.totalPages = pages
    },
  },
  actions: {
    async getOnAir({ commit }, { page }) {
      const res = await TMDBAPI.tv.getOnAir({ page })
      res.data.results.map(item => {
        item.media_type = 'tv'
        item.card_type = 'flex-item'
      })
      commit('setItems', res.data.results)
      commit('setPage', res.data.page)
      commit('setTotalPages', res.data.total_pages)
    },
  },
  getters: {
    getItems: (state) => state.itemList,
    getPage: (state) => state.page,
    getTotalPages: (state) => state.totalPages,
    getLoading: (state) => state.loading,
  },
}