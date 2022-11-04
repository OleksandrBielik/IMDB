<template>
  <div
    v-if="loading"
    class="spinner"
  >
    <i />
  </div>
  <div
    v-else-if="!items.length"
    class="no-results"
  >
    No results
  </div>
  <section v-else>
    <ul class="card-list">
      <card-item
        v-for="(item, index) in items"
        :key="item.id"
        :index="index"
        :path="$route.name"
        :item="item"
      />
    </ul>
  </section>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'CardList',
  components: {
    CardItem,
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    pathName() {
      try {
        const path = this.$route.name.split('-')[0] + (this.$route.name.split('-')[1][0].toUpperCase() + this.$route.name.split('-')[1].slice(1))
        return path
      } catch (error) {
        return ''
      }
    },
    items() {
      return this.$store.getters[`${this.pathName || this.$route.name}/getItems`]
    },
    totalPages() {
      return this.$store.getters[`${this.pathName || this.$route.name}/getTotalPages`]
    },
  },
  mounted() {
    switch(this.$route.name) {
      case 'search': {
        return this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'trending': {
        return this.$store.dispatch('trending/getTrending', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'person-popular': {
        return this.$store.dispatch('personPopular/getPopular', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'tv-onAir': {
        return this.$store.dispatch('tvOnAir/getOnAir', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'tv-popular': {
        return this.$store.dispatch('tvPopular/getPopular', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'tv-topRated': {
        return this.$store.dispatch('tvTopRated/getTopRated', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'movie-upcoming': {
        return this.$store.dispatch('movieUpcoming/getUpcoming', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'movie-topRated': {
        return this.$store.dispatch('movieTopRated/getTopRated', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'movie-popular': {
        return this.$store.dispatch('moviePopular/getPopular', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'movie-nowPlaying': {
        return this.$store.dispatch('movieNowPlaying/getNowPlaying', { page: this.$route.query.page })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'similar': {
        return this.$store.dispatch('similar/getSimilarMovies', { page: this.$route.query.page, id: this.$route.params.id })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
    }
  },
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
  .spinner {
    height: 100vh;
    i {
      margin: 20em auto;
      @media (min-width:1024px) {
        margin: 30em auto;
      }
    }
  }
  .no-results {
    padding: 70px 0 0 15px;
    font-size: 30px;
    width: 100%;
    height: 70vh;
  }
</style>