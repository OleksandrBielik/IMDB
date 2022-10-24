<template>
  <div class="top-rated">
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
  name: 'OnAirView',
  components: { 
    CardList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('tvTopRated/getTopRated', { page: this.$route.query.page })
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
  .top-rated {
    margin-bottom: 20px;
  }
</style>
