<template>
  <div class="home">
    <upcoming-list />
    <trending-list />
  </div>
</template>

<script>
import TrendingList from '@/components/TrendingList.vue'
import UpcomingList from '@/components/UpcomingList.vue'

export default {
  name: 'HomeView',
  components: {
    TrendingList,
    UpcomingList
  }
}
</script>
