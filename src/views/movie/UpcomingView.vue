<template>
  <div class="upcoming">
    <div class="container container-flex">
      <card-list :path="$route.name" />
    </div>
    <pagination-comp
      :path="$route.name"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import PaginationComp from '@/components/PaginationComp.vue';

export default {
  name: 'TrendingView',
  components: { 
    CardList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('movieUpcoming/getUpcoming', { page: this.$route.query.page })
    }
  },
  methods: {
    changePage(page) {
      this.$router.push({ query: { page } })
    }
  }
}
</script>

<style scoped>
  .trending {
    margin-bottom: 20px;
  }
</style>
