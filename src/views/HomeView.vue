<template>
  <div class="home">
    <upcoming-list />
    <trending-list />
    <popular-list />
    <on-air-list />
    <recently-list />
    <app-footer />
  </div>
</template>

<script>
import TrendingList from '@/components/TrendingList.vue';
import UpcomingList from '@/components/UpcomingList.vue';
import PopularList from '@/components/PopularList.vue';
import OnAirList from '@/components/OnAirList.vue';
import RecentlyList from '@/components/RecentlyList.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'HomeView',
  components: {
    TrendingList,
    UpcomingList,
    PopularList,
    OnAirList,
    RecentlyList,
    AppFooter,
  }
}
</script>
