<template>
  <div class="popular">
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
  name: 'PopularView',
  components: { 
    ItemList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('popular/getPopular', { page: this.$route.query.page })
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
  .popular {
    margin-bottom: 20px;
  }
</style>
