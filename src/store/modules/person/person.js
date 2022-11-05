import { TMDBAPI } from '@/api/tmdb-api';
import { getters } from '@/store/mixins/store/getters';
import { mutations } from '@/store/mixins/store/mutations';
import { state } from '@/store/mixins/store/state';

const {
  getters: {
    getItem,
    getCredits,
    getImages,
  }
} = getters;

const {
  mutations: {
    setItem,
    setImages,
    setCredits,
  }
} = mutations;

const {
  state: {
    itemData,
    creditsList,
    imagesList,
  },
  namespaced
} = state;
export const person = {
  namespaced,
  state: () => ({
    itemData,
    creditsList,
    imagesList,
  }),
  mutations: {
    setItem,
    setImages,
    setCredits,
  },
  actions: {
    async fetchPerson({ commit }, { id }) {
      return await TMDBAPI.person.getPerson({ id })
        .then(res => {
          res.data.images.profiles.map(item => {
            item.media_type = 'image'
            item.card_type = 'flick'
          })
          commit('setItem', res.data)
          commit('setImages', res.data.images.profiles)
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
  },
}