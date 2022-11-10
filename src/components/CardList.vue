<template>
  <section>
    <template v-if="loading || error.status || totalResults === 0">
      <div
        v-if="loading"
        class="status"
      >
        <app-loader />
      </div>
      <app-error
        v-else-if="error.status"
        class="status"
      />
      <div
        v-else-if="totalResults === 0"
        class="status no-results"
      >
        No results
      </div>
    </template>
    <ul
      v-else
      class="card-list"
    >
      <card-item
        v-for="(item, index) in items"
        :key="item.id"
        :index="index"
        :item="item"
      />
    </ul>
  </section>
</template>

<script>
import CardItem from '@/components/CardItem.vue';
import AppLoader from '@/components/errors/AppLoader.vue';
import AppError from '@/components/errors/AppError.vue';
import { methods } from '@/components/mixins/common/methods';

const { methods: {
  onCatch,
} } = methods;

export default {
  name: 'CardList',
  components: {
    CardItem,
    AppLoader,
    AppError,
  },
  data() {
    return {
      error: { status:false, type: null },
    }
  },
  computed: {
    pathName() {
      try {
        if (this.$route.name.split('-').length > 1) {
          return this.$route.name.split('-')[0] + (this.$route.name.split('-')[1][0].toUpperCase() + this.$route.name.split('-')[1].slice(1))
        } else {
          return this.$route.name
        }   
      } catch (error) {
        return null
      }
    },
    items() {
      return this.$store.getters[`${this.pathName}/getItems`]
    },
    totalPages() {
      return this.$store.getters[`${this.pathName}/getTotalPages`]
    },
    totalResults() {
      return this.$store.getters[`${this.pathName}/getTotalResults`]
    },
    loading() {
      return this.$store.getters[`${this.pathName}/getLoading`]
    },
  },
  async mounted() {
    switch(this.$route.name) {
      case 'search': {
        return this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'trending': {
        return this.$store.dispatch('trending/getTrending', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'person-popular': {
        return this.$store.dispatch('personPopular/getPopular', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'tv-onAir': {
        return this.$store.dispatch('tvOnAir/getOnAir', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'tv-popular': {
        return this.$store.dispatch('tvPopular/getPopular', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'tv-topRated': {
        return this.$store.dispatch('tvTopRated/getTopRated', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'movie-upcoming': {
        return this.$store.dispatch('movieUpcoming/getUpcoming', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'movie-topRated': {
        return this.$store.dispatch('movieTopRated/getTopRated', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'movie-popular': {
        return this.$store.dispatch('moviePopular/getPopular', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'movie-nowPlaying': {
        return this.$store.dispatch('movieNowPlaying/getNowPlaying', { page: this.$route.query.page })
          .catch(this.onCatch)
      }
      case 'similar': {
        return this.$store.dispatch('similar/getSimilarMovies', { page: this.$route.query.page, id: this.$route.params.id })
          .catch(this.onCatch)
      }
    }
  },
  beforeMount() {
    document.title = `IMDb ${this.$route.name}`
  },
  beforeUpdate() {
    document.title = `IMDb ${this.$route.name}`
  },
  methods: {
    onCatch,
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  padding: 20px 0;
  max-width: 320px;
  margin-top: 48px;
  @media (min-width:400px) {
    margin-top: 50.69px;
  }
  @media(min-width: 480px) {
    max-width: 480px;
  }
  @media(min-width: 768px) {
    max-width: 768px;
  }
  @media(min-width: 1024px) {
    max-width: 1024px;
  }
  @media(min-width: 1280px) {
    max-width: 1280px;
  }
}
  .status {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  i {
    margin: 25em auto;
  }
  .no-results {
    padding: 70px 0 0 15px;
    font-size: 30px;
    width: 100%;
    height: 70vh;
  }
</style>