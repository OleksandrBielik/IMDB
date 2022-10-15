<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'App',
    components: { AppHeader, AppFooter }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Inter', sans-serif;
    color: $white;
    background-color: $black;
  }
</style>