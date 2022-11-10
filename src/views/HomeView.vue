<template>
  <main class="home">
    <transition name="fade">
      <div
        v-if="loading"
        class="status-global"
      >
        <app-loader />
      </div>
    </transition>
    <upcoming-list :component-name="'Upcoming'" />
    <div class="container">
      <slider-list :component-name="'Trending'" />
      <slider-list :component-name="'Popular'" />
      <slider-list :component-name="'OnAir'" />
      <slider-list :component-name="'Recently'" />
    </div>
  </main>
</template>

<script>
import UpcomingList from '@/components/UpcomingList.vue';
import AppLoader from '@/components/errors/AppLoader.vue';
import { view } from '@/components/mixins/common/view';
const SliderList = () => import('@/components/SliderList.vue');

export default {
  name: 'HomeView',
  components: {
    SliderList,
    UpcomingList,
    AppLoader,
  },
  mixins: [view],
  beforeMount() {
    document.title = 'IMDb'
  },
  beforeUpdate() {
    document.title = 'IMDb'
  },
}
</script>

<style lang="scss" scoped>
  .home {
    padding-top: 15px;
  }
</style>
