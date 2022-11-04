<template>
  <div id="app">
    <template v-if="!error">
      <app-header
        v-if="$route.path !== '/login'"
        @on-click="onClick"
      />
      <burger-menu
        v-if="$route.path !== '/login'"
        :menu="menu"
        @on-click="onClick"
      />
      <router-view @on-error="onError" />
      <app-footer v-if="$route.path !== '/login'" />
    </template>
    <page-not-found v-else />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';
import PageNotFound from './components/errors/PageNotFound.vue';

export default {
    name: 'App',
    components: { 
      AppHeader, 
      AppFooter, 
      BurgerMenu,
      PageNotFound 
    },
    data() {
      return {
        menu: false,
        error: false,
      }
    },
    methods: {
      onClick(menu) {
        this.menu = menu
      },
      onError(val) {
        this.error = val
      }
    }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Inter', sans-serif;
    color: $white;
    background-color: $black;
  }
</style>