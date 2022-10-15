<template>
  <div class="on-air">
    <div class="container container-flex">
      <card-list :path="$route.path" />
    </div>
    <pagination-comp
      :path="$route.path"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import PaginationComp from '@/components/PaginationComp.vue';

export default {
  name: 'OnAirView',
  components: { 
    CardList, 
    PaginationComp 
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('onAir/getOnAir', { page: this.$route.query.page })
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
  .on-air {
    margin-bottom: 20px;
  }
</style>
