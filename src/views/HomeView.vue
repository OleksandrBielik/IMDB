<template>
  <main class="home">
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
import SliderList from '@/components/SliderList.vue';
import UpcomingList from '@/components/UpcomingList.vue';
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'HomeView',
  components: {
    SliderList,
    UpcomingList,
  },
  mixins: [scrollUp],
  mounted() {
    setTimeout(()=> this.scrollUp(), 50)
  },
}
</script>

<style scoped>
  .home {
    padding-top: 15px;
  }
</style>
