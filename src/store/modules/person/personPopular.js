import { TMDBAPI } from '@/api/tmdb-api';
import { getters } from '@/store/getters';
import { mutations } from '@/store/mutations';
import { state } from '@/store/state';

const {
  getters: {
    getItems,
    getPage,
    getTotalPages,
    getLoading,
  }
} = getters;

const {
  mutations: {
    setItems,
    setPage,
    setTotalPages,
    setLoading,
  }
} = mutations;

const {
  state: {
    itemList,
    page,
    totalPages,
    loading,
  },
  namespaced
} = state;

export const personPopular = {
  namespaced,
  state: () => ({
    itemList,
    page,
    totalPages,
    loading,
  }),
  mutations: {
    setItems,
    setPage,
    setTotalPages,
    setLoading,
  },
  actions: {
    async getPopular({ commit }, { page }) {
      commit('setLoading', true)
      return await TMDBAPI.person.getPopular({ page })
        .then(res => {
          res.data.results.map(item => {
            item.media_type = 'person'
            item.card_type = 'flex-item'
          })
          commit('setItems', res.data.results)
          commit('setPage', res.data.page)
          commit('setTotalPages', res.data.total_pages)
          commit('setLoading', false)
        })
    },
  },
  getters: {
    getItems,
    getPage,
    getTotalPages,
    getLoading,
  },
}