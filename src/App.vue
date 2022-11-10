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
      <keep-alive include="home">
        <router-view @on-error="onError" />
      </keep-alive>
      <app-footer v-if="$route.path !== '/login'" />
    </template>
    <page-not-found v-else />
  </div>
</template>

<script>
const AppFooter = ()=> import('@/components/AppFooter.vue');
const AppHeader = ()=> import('@/components/AppHeader.vue');
const BurgerMenu = ()=> import('@/components/BurgerMenu.vue');
const PageNotFound = ()=> import('./components/errors/PageNotFound.vue');

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
      },
    }
}
</script>

<style lang="scss">
  #app {
    background-color: inherit;
    color: inherit;
    font-family: inherit;
  }
</style>