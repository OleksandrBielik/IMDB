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
    onSearch({ commit }, { page }) {
      return TMDBAPI.search(page)
        .then(res => {
          commit('setItems', res.data.results);
        })
    },
  },
  getters: {
    getItems: (state) => state.itemList
  },
}