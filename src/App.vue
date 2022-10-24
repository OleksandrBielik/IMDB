<template>
  <div id="app">
    <app-header @on-click="onClick" />
    <burger-menu
      :menu="menu"
      @on-click="onClick"
    />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';

export default {
    name: 'App',
    components: { 
      AppHeader, 
      AppFooter, 
      BurgerMenu 
    },
    data() {
      return {
        menu: false
      }
    },
    methods: {
      onClick(menu) {
        this.menu = menu
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