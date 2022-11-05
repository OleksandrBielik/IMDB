import { TMDBAPI } from '@/api/tmdb-api';
import { getters } from '@/store/mixins/store/getters';
import { mutations } from '@/store/mixins/store/mutations';
import { state } from '@/store/mixins/store/state';

const {
  getters: {
    getItems,
    getPage,
    getTotalPages,
  }
} = getters;

const {
  mutations: {
    setItems,
    setPage,
    setTotalPages,
  }
} = mutations;

const {
  state: {
    itemList,
    page,
    totalPages,
  },
  namespaced
} = state;

export const tvPopular = {
  namespaced,
  state: () => ({
    itemList,
    page,
    totalPages,
  }),
  mutations: {
    setItems,
    setPage,
    setTotalPages,
  },
  actions: {
    async getPopular({ commit }, { page }) {
      return await TMDBAPI.tv.getPopular({ page })
        .then(res => {
          res.data.results.map(item => {
            item.media_type = 'tv'
            item.card_type = 'flex-item'
          })
          commit('setItems', res.data.results)
          commit('setPage', res.data.page)
          commit('setTotalPages', res.data.total_pages)
        })
    },
  },
  getters: {
    getItems,
    getPage,
    getTotalPages,
  },
}