<template>
  <div class="searc">
    <item-list />
    <pagination-comp />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
import PaginationComp from '@/components/PaginationComp.vue';

export default {
  name: 'SearchView',
  components: { 
    ItemList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
    }
  }
}
</script>

