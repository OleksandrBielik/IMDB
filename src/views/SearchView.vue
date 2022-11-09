<template>
  <main class="search">
    <div class="container container-flex">
      <card-list @on-error="onError" />
    </div>
    <pagination-comp @change-page="changePage" />
  </main>
</template>

<script>
import CardList from '@/components/CardList.vue';
import PaginationComp from '@/components/PaginationComp.vue';
import { methods } from '@/components/mixins/common/methods';

export default {
  name: 'SearchView',
  components: { 
    CardList, 
    PaginationComp 
  },
  mixins: [methods],
  watch: {
    $route(to, from) {
      this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
    }
  },
  methods: {
    changePage(page) {
      this.$router.push({ query: { query: this.$route.query.query, page } })
    },
  }
}
</script>

<style scoped>
  .search {
    margin-bottom: 20px;
  }
</style>
