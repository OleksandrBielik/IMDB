import { TMDBAPI } from '@/api/tmdb-api';

export const moviePopular = {
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
    async getPopular({ commit }, { page }) {
      const res = await TMDBAPI.movie.getPopular({ page })
      res.data.results.map(item => {
        item.media_type = 'movie'
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
  },
}