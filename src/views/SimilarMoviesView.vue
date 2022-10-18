<template>
  <div class="similar">
    <div class="container container-flex">
      <card-list
        :path="$route.name"
        :type="'Movies'"
      />
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
  name: 'SimilarMoviesView',
  components: { 
    CardList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('similar/getSimilarMovies', { query: this.$route.query.query, page: this.$route.query.page, id: this.$route.params.id })
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
  .similar {
    margin-bottom: 20px;
  }
</style>
