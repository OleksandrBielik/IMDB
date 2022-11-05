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
    setTotalPages
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

export const movieUpcoming = {
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
    async getUpcoming({ commit }, { page }) {
      return await TMDBAPI.movie.getUpcoming({ page })
        .then(res => {
          res.data.results.map(item => {
            item.media_type = 'movie'
            item.card_type = 'flex-item'
          })
          commit('setItems', res.data.results)
          commit('setPage', res.data.page)
          commit('setTotalPages', res.data.total_pages)
          setTimeout(() => commit('setLoading', false),2000)
        })
    },
  },
  getters: {
    getItems,
    getPage,
    getTotalPages,
  },
}