import { TMDBAPI } from '@/api/tmdb-api';

export const movie = {
  namespaced: true,
  state: () => ({
    itemList: {},
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = items
    },
  },
  actions: {
    async getMovie({ commit }, { id }) {
      const res = await TMDBAPI.getMovie({ id })
      console.log(res)
      commit('setItems', res.data)
    },
  },
  getters: {
    getItems: (state) => state.itemList,
  },
}