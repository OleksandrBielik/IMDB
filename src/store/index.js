import Vue from 'vue';
import Vuex from 'vuex';
import { search } from '@/store/modules/search';
import { home } from '@/store/modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    home
  }
})
