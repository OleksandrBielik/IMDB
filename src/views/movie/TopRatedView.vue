<template>
  <page-not-found v-if="error" />
  <div
    v-else
    class="top-rated"
  >
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
import CardList from '@/components/CardList.vue';
import PaginationComp from '@/components/PaginationComp.vue';
import { scrollUp } from '@/components/mixins/common/scrollUp';
import PageNotFound from '@/components/errors/PageNotFound.vue';

export default {
  name: 'TopRatedView',
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
      this.$store.dispatch('movieTopRated/getTopRated', { page: this.$route.query.page })
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
  .top-rated {
    margin-bottom: 20px;
  }
</style>
