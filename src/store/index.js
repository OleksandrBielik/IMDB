import Vue from 'vue';
import Vuex from 'vuex';
import { search } from '@/store/modules/search';
import { home } from '@/store/modules/home';
import { trending } from '@/store/modules/trending';
import { popular } from '@/store/modules/popular';
import { onAir } from '@/store/modules/onAir';
import { movie } from '@/store/modules/movie';
import { similar } from '@/store/modules/similar';
import { tv } from '@/store/modules/tv';
import { person } from '@/store/modules/person';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    home,
    trending,
    popular,
    onAir,
    movie,
    similar,
    tv,
    person
  }
})
