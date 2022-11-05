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
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'TrendingView',
  components: { 
    CardList, 
    PaginationComp,
  },
  mixins: [scrollUp],
  watch: {
    $route(to, from) {
      this.$store.dispatch('movieUpcoming/getUpcoming', { page: this.$route.query.page })
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
  .upcoming {
    margin-bottom: 20px;
  }
</style>
