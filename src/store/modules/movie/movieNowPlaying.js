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

export const movieNowPlaying = {
  namespaced,
  state: {
    itemList,
    page,
    totalPages,
  },
  mutations: {
    setItems,
    setPage,
    setTotalPages,
  },
  actions: {
    getNowPlaying({ commit }, { page }) {
      TMDBAPI.movie.getNowPlaying({ page })
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
        .catch(function (error) {
          if (error.response.status === 404) {
            commit('setError', true)
            return
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
    },
  },
  getters: {
    getItems,
    getPage,
    getTotalPages,
  },
}