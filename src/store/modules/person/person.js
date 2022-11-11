import { TMDBAPI } from '@/api/tmdb-api';
import { getters } from '@/store/getters';
import { mutations } from '@/store/mutations';
import { state } from '@/store/state';

const {
  getters: {
    getItem,
    getCredits,
    getImages,
    getLoading,
  }
} = getters;

const {
  mutations: {
    setItem,
    setImages,
    setCredits,
    setLoading,
  }
} = mutations;

const {
  state: {
    itemData,
    creditsList,
    imagesList,
    loading,
  },
  namespaced
} = state;
export const person = {
  namespaced,
  state: () => ({
    itemData,
    creditsList,
    imagesList,
    loading,
  }),
  mutations: {
    setItem,
    setImages,
    setCredits,
    setLoading,
  },
  actions: {
    async fetchPerson({ commit }, { id }) {
      commit('setLoading', true)
      return await TMDBAPI.person.getPerson({ id })
        .then(res => {
          res.data.images.profiles.map(item => {
            item.media_type = 'image'
            item.card_type = 'flick'
          })
          commit('setItem', res.data)
          commit('setImages', res.data.images.profiles)
          commit('setLoading', false)
        })
    },
    async fetchCredits({ commit }, { id, page }) {
      return await TMDBAPI.person.getCombinedCredits({ id, page })
        .then(res => {
          res.data.cast.map(item => {
            item.card_type = 'flick'
          })
          commit('setCredits', res.data.cast)
        })
    },
  },
  getters: {
    getItem,
    getCredits,
    getImages,
    getLoading,
  },
}