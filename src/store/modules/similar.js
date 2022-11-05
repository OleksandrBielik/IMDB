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

export const similar = {
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
    async getSimilarMovies({ commit }, { page, id }) {
      return await TMDBAPI.common.getSimilar({ page, id, type: 'movie' })
        .then(res => {
          res.data.results.map(item => {
            item.card_type = 'flex-item'
            item.media_type = 'movie'
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