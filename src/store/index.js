import Vue from 'vue';
import Vuex from 'vuex';
import { search } from '@/store/modules/search';
import { home } from '@/store/modules/home';
import { trending } from '@/store/modules/trending';
import { personPopular } from '@/store/modules/person/personPopular';
import { tvOnAir } from '@/store/modules/tv/tvOnAir';
import { tvPopular } from '@/store/modules/tv/tvPopular';
import { tvTopRated } from '@/store/modules/tv/tvTopRated';
import { movie } from '@/store/modules/movie/movie';
import { similar } from '@/store/modules/similar';
import { tv } from '@/store/modules/tv/tv';
import { person } from '@/store/modules/person/person';
import { movieUpcoming } from '@/store/modules/movie/movieUpcoming';
import { movieTopRated } from '@/store/modules/movie/movieTopRated';
import { moviePopular } from '@/store/modules/movie/moviePopular';
import { movieNowPlaying } from '@/store/modules/movie/movieNowPlaying';
import { auth } from '@/store/modules/auth';
import { watchlist } from '@/store/modules/watchlist';
import { rated } from '@/store/modules/rated';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    home,
    trending,
    personPopular,
    tvOnAir,
    tvPopular,
    tvTopRated,
    movie,
    similar,
    tv,
    person,
    movieUpcoming,
    movieTopRated,
    moviePopular,
    movieNowPlaying,
    auth,
    watchlist,
    rated
  }
})
