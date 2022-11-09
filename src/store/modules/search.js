import { TMDBAPI } from '@/api/tmdb-api';
import { getters } from '@/store/getters';
import { mutations } from '@/store/mutations';
import { state } from '@/store/state';

const {
  getters: {
    getItems,
    getPage,
    getTotalPages,
    getTotalResults,
  }
} = getters;

const {
  mutations: {
    setItems,
    setPage,
    setTotalPages,
    setTotalResults,
  }
} = mutations;

const {
  state: {
    itemList,
    page,
    totalPages,
    totalResults,
  },
  namespaced
} = state;

export const search = {
  namespaced,
  state: () => ({
    itemList,
    page,
    totalPages,
    totalResults,
  }),
  mutations: {
    setItems,
    setPage,
    setTotalPages,
    setTotalResults,
  },
  actions: {
    async onSearch({ commit }, { page, query }) {
      commit('setLoading', true)
      return TMDBAPI.search.search({ page, query })
        
        .then(res => {
          res.data.results.map(item => {
            item.card_type = 'flex-item'
          })
          commit('setItems', res.data.results)
          commit('setPage', res.data.page)
          commit('setTotalPages', res.data.total_pages)
          commit('setTotalResults', res.data.total_results)
          commit('setLoading', false)
        })
    },
  },
  getters: {
    getItems,
    getPage,
    getTotalPages,
    getTotalResults,
  },
}