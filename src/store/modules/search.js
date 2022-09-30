import { TMDBAPI } from '@/api/tmdb-api';

export const search = {
  namespaced: true,
  state: () => ({
    itemList: []
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = [...items]
    },
  },
  actions: {
    async onSearch({ commit }, { page = 1, query }) {
      const res = await TMDBAPI.search({ page, query })
      commit('setItems', res.data.results)
    },
  },
  getters: {
    getItems: (state) => state.itemList
  },
}