<template>
  <div class="trending">
    <item-list :path="$route.path" />
    <pagination-comp
      :path="$route.path"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
import PaginationComp from '@/components/PaginationComp.vue';

export default {
  name: 'TrendingView',
  components: { 
    ItemList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('trending/getTrending', { page: this.$route.query.page })
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
  .trending {
    margin-bottom: 20px;
  }
</style>
