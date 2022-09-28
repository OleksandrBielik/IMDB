import { TMDBAPI } from '@/api/tmdb-api';

export const search = {
  namespaced: true,
  state: () => ({
    itemList: []
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = [...items]
      console.log(state.itemList)
    },
  },
  actions: {
    async onSearch({ commit }, { page }) {
      const res = await TMDBAPI.search({ page })
      commit('setItems', res.data.results)
    },
  },
  getters: {
    getItems: (state) => state.itemList
  },
}