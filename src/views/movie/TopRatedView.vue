<template>
  <div class="top-rated">
    <div class="container container-flex">
      <card-list @on-error="onError" />
    </div>
    <pagination-comp @change-page="changePage" />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';
import PaginationComp from '@/components/PaginationComp.vue';
import { methods } from '@/components/mixins/common/methods';

export default {
  name: 'TopRatedView',
  components: { 
    CardList, 
    PaginationComp,
  },
  mixins: [methods],
  watch: {
    async $route(to, from) {
      return this.$store.dispatch('movieTopRated/getTopRated', { page: this.$route.query.page })
        .catch(this.onCatch)
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 50)
  },
}
</script>

<style scoped>
  .top-rated {
    margin-bottom: 20px;
  }
</style>
