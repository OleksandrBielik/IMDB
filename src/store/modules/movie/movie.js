import { TMDBAPI } from '@/api/tmdb-api';
import { getters } from '@/store/mixins/store/getters';
import { mutations } from '@/store/mixins/store/mutations';
import { state } from '@/store/mixins/store/state';

const {
  getters: {
    getItem,
    getSimilar,
    getCredits,
    getImages,
    getVideos,
  }
} = getters;

const {
  mutations: {
    setItem,
    setCredits,
    setImages,
    setVideos,
    setSimilar
  }
} = mutations;

const {
  state: {
    itemData,
    similarList,
    creditsList,
    imagesList,
    videosList,
  },
  namespaced
} = state;

export const movie = {
  namespaced,
  state: () => ({
    itemData,
    similarList,
    creditsList,
    imagesList,
    videosList,
  }),
  mutations: {
    setItem,
    setCredits,
    setImages,
    setVideos,
    setSimilar
  },
  actions: {
    async fetchMovie({ commit }, { id }) {
      return await TMDBAPI.movie.getMovie({ id })
        .then(res => {
          res.data.images.backdrops.map(item => {
            item.media_type = 'image'
            item.card_type = 'flick'
          })
          res.data.videos.results.map(item => {
            item.media_type = 'video'
            item.card_type = 'flick'
          })
          commit('setItem', res.data)
          commit('setVideos', res.data.videos.results)
          commit('setImages', res.data.images.backdrops)
        })
    },
    fetchSimilar({ commit }, { id, page }) {
      TMDBAPI.common.getSimilar({ id, page, type: 'movie' })
        .then(res => {
          res.data.results.map(item => {
            item.media_type = 'movie'
            item.card_type = 'flick'
          })
          commit('setSimilar', res.data.results)
        })
        .catch(error => {
          if (error.response.status === 404) {
            console.log('')
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      },
    fetchCredits({ commit }, { id, page }) {
      TMDBAPI.common.getCredits({ id, page, type: 'movie' })
        .then(res => {
          res.data.cast.map(item => {
            item.media_type = 'person'
            item.card_type = false
          })
          commit('setCredits', res.data.cast)
        })
        .catch(error => {
          if (error.response.status === 404) {
            console.log('')
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
    },
  },
  getters: {
    getItem,
    getSimilar,
    getCredits,
    getImages,
    getVideos,
  }
}