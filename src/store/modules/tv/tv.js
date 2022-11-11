import { TMDBAPI } from '@/api/tmdb-api';
import { getters } from '@/store/getters';
import { mutations } from '@/store/mutations';
import { state } from '@/store/state';

const {
  getters: {
    getItem,
    getSimilar,
    getCredits,
    getImages,
    getVideos,
    getLoading,
  }
} = getters;

const {
  mutations: {
    setItem,
    setCredits,
    setImages,
    setVideos,
    setSimilar,
    setLoading,
  }
} = mutations;

const {
  state: {
    itemData,
    similarList,
    creditsList,
    imagesList,
    videosList,
    loading,
  },
  namespaced
} = state;

export const tv = {
  namespaced,
  state: () => ({
    itemData,
    similarList,
    creditsList,
    imagesList,
    videosList,
    loading,
  }),
  mutations: {
    setItem,
    setCredits,
    setImages,
    setVideos,
    setSimilar,
    setLoading,
  },
  actions: {
    async fetchTv({ commit }, { id }) {
      commit('setLoading', true)
      return await TMDBAPI.tv.getTv({ id })
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
          commit('setLoading', false)
        })
    },
    async fetchSimilar({ commit }, { id, page }) {
      return await TMDBAPI.common.getSimilar({ id, page, type: 'tv' })
        .then(res => {
          res.data.results.map(item => {
            item.media_type = 'tv'
            item.card_type = 'flick'
          })
          commit('setSimilar', res.data.results)
        })
    },
    async fetchCredits({ commit }, { id, page }) {
      return await TMDBAPI.common.getCredits({ id, page, type: 'tv' })
        .then(res => {
          res.data.cast.map(item => {
            item.media_type = 'person'
            item.card_type = false
          })
          commit('setCredits', res.data.cast)
        })
    },
  },
  getters: {
    getItem,
    getSimilar,
    getCredits,
    getImages,
    getVideos,
    getLoading,
  },
}