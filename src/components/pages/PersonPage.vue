<template>
  <div>
    <template v-if="loading || error.status">
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
    </template>
    <article
      v-else
      class="page"
    >
      <h1>{{ title }}</h1>
      <div class="wrapper">
        <div class="thumb">
          <img
            :src="imgURL"
            :alt="title + ' photo'"
          >
        </div>
        <ul class="info">
          <li>
            <p>
              <span>Birthday:</span> {{ ' ' + items.birthday }}
            </p>
          </li>
          <li>
            <p>
              <span>Place of birth:</span> {{ ' ' + items.place_of_birth }}
            </p>
          </li>
          <li>
            <p>
              <span>Also known as:</span> {{ ' ' + known }}
            </p>
          </li>
          <li>
            <p>
              <span>Rating:</span> {{ ' ' + rating }}
            </p>
          </li>
          <li>
            <p>
              <span>Biography:</span> {{ ' ' + items.biography }}
            </p>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import AppError from '@/components/errors/AppError.vue';
import AppLoader from '@/components/errors/AppLoader.vue';
import { methods } from '@/components/mixins/common/methods';

const { methods: {
  onCatch,
} } = methods;

export default {
  name: 'PersonPage',
  components: {
    AppError,
    AppLoader,
  },
  data() {
    return {
      error: { status: false, type: null }
    }
  },
  computed: {
    items() {
      return this.$store.getters[`${this.$route.name}/getItem`]
    },
    images() {
      return this.$store.getters[`${this.$route.name}/getImages`]
    },
    title() {
      return this.items.name
    },
    known() {
      try {
        return this.items.also_known_as.join()
      } catch (error) {
        return ''
      }
      
    },
    rating() {
      return Math.round(this.items.popularity)
    },
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.items.profile_path}`
    },
    loading() {
      return this.$store.getters['person/getLoading']
    }
  },
  async mounted() {
    return this.$store.dispatch('person/fetchPerson', { id: this.$route.params.id })
      .catch(this.onCatch)
  },
  methods: {
    onCatch,
  }
}
</script>

<style lang="scss" scoped>
  .page {
    color: #fff;
    padding-top: 50px;
    line-height: 24px;
    @media (min-width:400px) {
      padding-top: 50.69px;
    }
  }
  h1 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 20px;
    padding-top: 20px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 70px;
    @media(min-width:768px) {
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 100px;
    }
  }
  .thumb {
    margin-bottom: 50px;
    @media(min-width:768px) {
      margin: 0 15px 0 0;
    }
  }
  img {
    object-fit: cover;
    height: 300px;
    min-width: 200px;
    border-radius: 5px;
  }
  span {
    font-weight: 800;
  }
  li {
    border-bottom: 1px solid $white;
  }
  li:not(:first-child) {
    padding: 10px 0;
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
</style>