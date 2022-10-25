import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/trending',
    name: 'trending',
    component: () => import('../views/TrendingView.vue')
  },
  {
    path: '/tv/images/:id',
    name: 'tv-images',
    component: () => import('../views/ImageView.vue')
  },
  {
    path: '/tv/videos/:id',
    name: 'tv-videos',
    component: () => import('../views/VideoView.vue')
  },
  {
    path: '/tv/on-air',
    name: 'tv-onAir',
    component: () => import('../views/tv/OnAirView.vue')
  },
  {
    path: '/tv/popular',
    name: 'tv-popular',
    component: () => import('../views/tv/PopularView.vue')
  },
  {
    path: '/tv/top-rated',
    name: 'tv-topRated',
    component: () => import('../views/tv/TopRatedView.vue')
  },
  {
    path: '/tv/:id',
    name: 'tv',
    component: () => import('../views/tv/TvView.vue')
  },
  {
    path: '/movie/images/:id',
    name: 'movie-images',
    component: () => import('../views/ImageView.vue')
  },
  {
    path: '/movie/videos/:id',
    name: 'movie-videos',
    component: () => import('../views/VideoView.vue')
  },
  {
    path: '/movie/:id/similar',
    name: 'similar',
    component: () => import('../views/movie/SimilarView.vue')
  },
  {
    path: '/movie/upcoming',
    name: 'movie-upcoming',
    component: () => import('../views/movie/UpcomingView.vue')
  },
  {
    path: '/movie/top-rated',
    name: 'movie-topRated',
    component: () => import('../views/movie/TopRatedView.vue')
  },
  {
    path: '/movie/popular',
    name: 'movie-popular',
    component: () => import('../views/movie/PopularView.vue')
  },
  {
    path: '/movie/now-playing',
    name: 'movie-nowPlaying',
    component: () => import('../views/movie/NowPlayingView.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('../views/movie/MovieView.vue')
  },
  {
    path: '/person/popular',
    name: 'person-popular',
    component: () => import('../views/person/PopularView.vue')
  },
  {
    path: '/person/images/:id',
    name: 'person-images',
    component: () => import('../views/ImageView.vue')
  },
  {
    path: '/person/:id',
    name: 'person',
    component: () => import('../views/person/PersonView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
