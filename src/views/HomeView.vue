<template>
  <div class="home">
    <upcoming-list />
    <trending-list />
    <popular-list />
    <on-air-list />
  </div>
</template>

<script>
import TrendingList from '@/components/TrendingList.vue';
import UpcomingList from '@/components/UpcomingList.vue';
import PopularList from '@/components/PopularList.vue';
import OnAirList from '@/components/OnAirList.vue';

export default {
  name: 'HomeView',
  components: {
    TrendingList,
    UpcomingList,
    PopularList,
    OnAirList,
  }
}
</script>
