<template>
  <div class="popular">
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
      this.$store.dispatch('tvPopular/getPopular', { page: this.$route.query.page })
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
  .popular {
    margin-bottom: 20px;
  }
</style>
