<template>
  <div class="search">
    <div class="container container-flex">
      <card-list :path="$route.path" />
    </div>
    <pagination-comp
      :path="$route.path"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import PaginationComp from '@/components/PaginationComp.vue';

export default {
  name: 'SearchView',
  components: { 
    CardList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
    }
  },
  methods: {
    changePage(page) {
      this.$router.push({ query: { query: this.$route.query.query, page } })
    }
  }
}
</script>

<style scoped>
  .search {
    margin-bottom: 20px;
  }
</style>
