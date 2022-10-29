<template>
  <div
    v-if="loading"
    class="spinner"
  >
    <i />
  </div>
  <ul
    v-else
    class="card-list"
  >
    <card-item
      v-for="(item, index) in items"
      :key="item.id"
      :index="index"
      :path="path"
      :item="item"
    />
  </ul>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'CardList',
  components: {
    CardItem,
  },
  props: {
    path: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    pathName() {
      try {
        const path = this.path.split('-')[0] + (this.path.split('-')[1][0].toUpperCase() + this.path.split('-')[1].slice(1))
        return path
      } catch (error) {
        return ''
      }
    },
    items() {
      return this.$store.getters[`${this.pathName || this.path}/getItems`]
    },
    totalPages() {
      return this.$store.getters[`${this.pathName || this.path}/getTotalPages`]
    },
    loading() {
      return this.$store.getters[`${this.pathName || this.path}/getLoading`]
    }
  },
  mounted() {
    this.scrollUp()
    switch(this.path) {
      case 'search': this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
      break
      case 'trending': this.$store.dispatch('trending/getTrending', { page: this.$route.query.page })
      break
      case 'person-popular': this.$store.dispatch('personPopular/getPopular', { page: this.$route.query.page })
      break
      case 'tv-onAir': this.$store.dispatch('tvOnAir/getOnAir', { page: this.$route.query.page })
      break
      case 'tv-popular': this.$store.dispatch('tvPopular/getPopular', { page: this.$route.query.page })
      break
      case 'tv-topRated': this.$store.dispatch('tvTopRated/getTopRated', { page: this.$route.query.page })
      break
      case 'movie-upcoming': this.$store.dispatch('movieUpcoming/getUpcoming', { page: this.$route.query.page })
      break
      case 'movie-topRated': this.$store.dispatch('movieTopRated/getTopRated', { page: this.$route.query.page })
      break
      case 'movie-popular': this.$store.dispatch('moviePopular/getPopular', { page: this.$route.query.page })
      break
      case 'movie-nowPlaying': this.$store.dispatch('movieNowPlaying/getNowPlaying', { page: this.$route.query.page })
      break
      case 'similar': this.$store.dispatch(`similar/getSimilar${this.type}`, { page: this.$route.query.page, id: this.$route.params.id })
      break
      default: return
    }
  },
  methods: {
    scrollUp() {
      document.querySelector('#app').scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
  }
}
</script>

<style lang="scss" scoped>
  .spinner {
    height: 100vh;
    i {
      margin: 20em auto;
      @media (min-width:1024px) {
        margin: 30em auto;
      }
    }
  }
</style>