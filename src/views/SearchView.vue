<template>
  <main class="search">
    <div class="container container-flex">
      <card-list @on-error="onError" />
    </div>
    <pagination-comp
      :path="$route.name"
      @change-page="changePage"
    />
  </main>
</template>

<script>
import CardList from '@/components/CardList.vue';
import PaginationComp from '@/components/PaginationComp.vue';
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'SearchView',
  components: { 
    CardList, 
    PaginationComp 
  },
  mixins: [scrollUp],
  watch: {
    $route(to, from) {
      this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
    }
  },
  methods: {
    changePage(page) {
      this.$router.push({ query: { query: this.$route.query.query, page } })
    },
    onError(val) {
      this.$emit('on-error', val)
    }
  }
}
</script>

<style scoped>
  .search {
    margin-bottom: 20px;
  }
</style>
