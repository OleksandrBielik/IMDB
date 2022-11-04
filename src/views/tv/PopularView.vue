<template>
  <div class="popular">
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
import CardList from '@/components/CardList.vue'
import PaginationComp from '@/components/PaginationComp.vue';
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'OnAirView',
  components: { 
    CardList, 
    PaginationComp 
  },
  mixins: [scrollUp],
  watch: {
    $route(to, from) {
      this.$store.dispatch('tvPopular/getPopular', { page: this.$route.query.page })
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
  .popular {
    margin-bottom: 20px;
  }
</style>
