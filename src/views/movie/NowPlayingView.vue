<template>
  <page-not-found v-if="error" />
  <div
    v-else
    class="now-playing"
  >
    <div class="container container-flex">
      <card-list />
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
import PageNotFound from '@/components/errors/PageNotFound.vue';

export default {
  name: 'NowPlayingView',
  components: { 
    CardList, 
    PaginationComp, 
    PageNotFound,
  },
  mixins: [scrollUp],
  computed: {
    error() {
      return this.$store.getters['movieNowPlaying/getError']
    }
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('movieNowPlaying/getNowPlaying', { page: this.$route.query.page })
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
  .now-playing {
    margin-bottom: 20px;
  }
</style>
