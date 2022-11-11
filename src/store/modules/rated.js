export const rated = {
  namespaced: true,
  state: () => ({
    itemList: JSON.parse(localStorage.getItem('rated')) || [],
  }),
  mutations: {
    setItems(state, items) {
      state.itemList = items
      localStorage.setItem('rated', JSON.stringify(items))
    },
    addItem(state, item) {
      state.itemList.push(item)
      if (!localStorage.getItem('rated')) {
        localStorage.setItem('rated', JSON.stringify([item]))
      } else {
        localStorage.setItem('rated', JSON.stringify([...JSON.parse(localStorage.getItem('rated')), item]))
      }
    },
    clearItems(state) {
      state.itemList = []
      localStorage.removeItem('rated')
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