<template>
  <main class="upcoming">
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
  name: 'TrendingView',
  components: { 
    CardList, 
    PaginationComp,
  },
  mixins: [methods],
  watch: {
    async $route(to, from) {
      return this.$store.dispatch('movieUpcoming/getUpcoming', { page: this.$route.query.page })
        .catch(this.onCatch)
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 1000)
  },
}
</script>

<style scoped>
  .upcoming {
    margin-bottom: 20px;
  }
</style>
