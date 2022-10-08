<template>
  <ul class="pagination">
    <template v-if="pages < 5">
      <pagination-item
        v-for="(item, index) in pages"
        :key="index+1"
        :item="item"
      />
    </template>
    <template v-else>
      <pagination-item :item="1" />
      <pagination-item :item="2" />
      <pagination-item :item="3" />
      <pagination-item :item="'...'" />
    </template>
  </ul>
</template>

<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
  name: 'PaginationComp',
  components: { PaginationItem },
  data() {
    return {
      currentPage: this.$route.query.page || 1
    }
  },
  computed: {
    pages() {
      return this.$store.getters['search/getTotalPages']
    },
    page() {
      return this.$store.getters['search/getPage']
    }
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: center;
  }

  li:not(:last-child) {
    margin-right: 5px;
  }
  .active {
    background-color: gray;
  }
</style>