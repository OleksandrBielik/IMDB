<template>
  <div class="home">
    <trending-list />
  </div>
</template>

<script>
import TrendingList from '@/components/TrendingList.vue'

export default {
  name: 'HomeView',
  components: {
    TrendingList
  }
}
</script>
