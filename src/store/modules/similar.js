import { TMDBAPI } from '@/api/tmdb-api';

export const similar = {
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
    async getSimilarMovies({ commit }, { page, id }) {
      const res = await TMDBAPI.common.getSimilar({ page, id, type: 'movie' })
      res.data.results.map(item => {
        item.card_type = 'flex-item'
        item.media_type = 'movie'
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