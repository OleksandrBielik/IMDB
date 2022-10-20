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
    path: '/popular',
    name: 'popular',
    component: () => import('../views/PopularView.vue')
  },
  {
    path: '/onAir',
    name: 'onAir',
    component: () => import('../views/OnAirView.vue')
  },
  {
    path: '/movie/:id/similar',
    name: 'similar',
    component: () => import('../views/SimilarMoviesView.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('../views/MovieView.vue')
  },
  {
    path: '/tv/:id',
    name: 'tv',
    component: () => import('../views/TvView.vue')
  },
  {
    path: '/tv/images/:id',
    name: 'tv-images',
    component: () => import('../views/ImageView.vue')
  },
  {
    path: '/movie/images/:id',
    name: 'movie-images',
    component: () => import('../views/ImageView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
