export const watchlist = {
  namespaced: true,
  state: () => ({
    itemList: JSON.parse(localStorage.getItem('watchlist')) || [],
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = items
    },
    addItem(state, item) {
      state.itemList.push(item)
      if (!localStorage.getItem('watchlist')) {
        localStorage.setItem('watchlist', JSON.stringify([item]))
      } else {
        localStorage.setItem('watchlist', JSON.stringify([...JSON.parse(localStorage.getItem('watchlist')), item]))
      }
    },
    clearItems(state) {
      state.itemList = []
      localStorage.removeItem('watchlist')
    }
  },
  actions: {
    addItem({ commit }, { item }) {
      commit('addItem', item)
    },
    setItems({ commit }, { items }) {
      commit('setItems', items)
    },
    clearItems({ commit }) {
      commit('clearItems')
    }
  },
  getters: {
    getItems: (state) => state.itemList,
  },
}