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
    path: '/movie/:id',
    name: 'movie',
    component: () => import('../views/MovieView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
