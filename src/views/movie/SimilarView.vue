<template>
  <main class="similar">
    <div class="container container-flex">
      <card-list @on-error="onError" />
    </div>
    <pagination-comp @change-page="changePage" />
  </main>
</template>

<script>
import CardList from '@/components/CardList.vue'
import PaginationComp from '@/components/PaginationComp.vue';
import { methods } from '@/components/mixins/common/methods';

export default {
  name: 'SimilarMoviesView',
  components: { 
    CardList, 
    PaginationComp,
  },
  mixins: [methods],
  watch: {
    $route(to, from) {
      this.$store.dispatch('similar/getSimilarMovies', { query: this.$route.query.query, page: this.$route.query.page, id: this.$route.params.id })
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 50)
  },
  methods: {
    changePage(page, id) {
      this.$router.push({ query: { page, id } })
    },
  }
}
</script>

<style scoped>
  .similar {
    margin-bottom: 20px;
  }
</style>
