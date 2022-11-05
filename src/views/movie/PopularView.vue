<template>
  <main class="popular">
    <div class="container container-flex">
      <card-list @on-error="onError" />
    </div>
    <pagination-comp @change-page="changePage" />
  </main>
</template>

<script>
import CardList from '@/components/CardList.vue'
import PaginationComp from '@/components/PaginationComp.vue';
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'PopularView',
  components: { 
    CardList, 
    PaginationComp,
  },
  mixins: [scrollUp],
  watch: {
    $route(to, from) {
      this.$store.dispatch('moviePopular/getPopular', { page: this.$route.query.page })
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 1000)
  },
  methods: {
    changePage(page) {
      this.$router.push({ query: { page } })
    },
    onError(val) {
      this.$emit('on-error', val)
    }
  }
}
</script>

<style scoped>
  .popular {
    margin-bottom: 20px;
  }
</style>
