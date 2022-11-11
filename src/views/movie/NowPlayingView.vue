<template>
  <main class="now-playing">
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
  name: 'NowPlayingView',
  components: { 
    CardList, 
    PaginationComp,
  },
  mixins: [methods],
  watch: {
    async $route(to, from) {
      return this.$store.dispatch('movieNowPlaying/getNowPlaying', { page: this.$route.query.page })
        .catch(this.onCatch)
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 50)
  },
}
</script>

<style lang="scss" scoped>
  .now-playing {
    margin-bottom: 20px;
  }
</style>
