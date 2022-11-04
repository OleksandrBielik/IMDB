<template>
  <page-not-found v-if="error" />
  <div
    v-else
    class="similar"
  >
    <div class="container container-flex">
      <card-list />
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
import { scrollUp } from '@/components/mixins/common/scrollUp';
import PageNotFound from '@/components/errors/PageNotFound.vue';

export default {
  name: 'SimilarMoviesView',
  components: { 
    CardList, 
    PaginationComp,
    PageNotFound,
  },
  mixins: [scrollUp],
  computed: {
    error() {
      return this.$store.getters['movie/getError']
    }
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('similar/getSimilarMovies', { query: this.$route.query.query, page: this.$route.query.page, id: this.$route.params.id })
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 1000)
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
