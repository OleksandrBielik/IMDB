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

export const tv = {
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
    setSimilar,
  },
  actions: {
    async fetchTv({ commit }, { id }) {
      try {
        const res = await TMDBAPI.tv.getTv({ id })
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
        setTimeout(() => commit('setLoading', false),2000)
      } catch (error) {
        console.log(error)
      }

    },
    async fetchSimilar({ commit }, { id, page }) {
      const res = await TMDBAPI.common.getSimilar({ id, page, type: 'tv' })
      res.data.results.map(item => {
        item.media_type = 'tv'
        item.card_type = 'flick'
      })
      commit('setSimilar', res.data.results)
    },
    async fetchCredits({ commit }, { id, page }) {
      const res = await TMDBAPI.common.getCredits({ id, page, type: 'tv' })
      res.data.cast.map(item => {
        item.media_type = 'person'
        item.card_type = false
      })
      commit('setCredits', res.data.cast)
    },
  },
  getters: {
    getItem,
    getSimilar,
    getCredits,
    getImages,
    getVideos,
  },
}