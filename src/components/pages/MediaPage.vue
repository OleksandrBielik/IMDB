<template>
  <main>
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
    <div
      v-else
      class="container"
    >
      <img
        v-if="media === 'images'"
        :src="imgURL"
        alt="image"
      >
      <div
        v-else-if="media === 'videos'"
        class="video"
      >
        <iframe
          :src="videoURL"
          frameborder="0"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { methods } from '@/components/mixins/common/methods';
import AppError from '@/components/errors/AppError.vue';
import AppLoader from '@/components/errors/AppLoader.vue';

const { methods: {
  onCatch,
} } = methods;

export default {
  name: 'MediaPage',
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
    media() {
      return this.$route.name.split('-')[1]
    },
    parrentId() {
      return this.$route.params.id.split('-')[0]
    },
    childId() {
      return this.$route.params.id.split('-')[1]
    },
    pathName() {
      return this.$route.name.split('-')[0]
    },
    item() {
      switch(this.media) {
        case 'images': return this.$store.getters[`${this.pathName}/getImages`][this.childId-1]
        case 'videos': return this.$store.getters[`${this.pathName}/getVideos`][this.childId-1]
        default: return null
      }
    },
    imgURL() {
      try {
        return `${process.env.VUE_APP_IMG_URL}${this.item.poster_path || this.item.profile_path || this.item.file_path}`
      } catch (error) {
        return ''
      }
    },
    videoURL() {
      try {
        return `https://www.youtube.com/embed/${this.item.key}`
      } catch (error) {
        return ''
      }
    },
    loading() {
      return this.$store.getters[`${this.pathName}/getLoading`]
    },
    items() {
      switch(this.media) {
        case 'images': return this.$store.getters[`${this.pathName}/getImages`]
        case 'videos': return this.$store.getters[`${this.pathName}/getVideos`]
        default: return null
      }
    },
  },
  async mounted() {
    switch(this.pathName) {
      case 'tv': {
        return this.$store.dispatch('tv/fetchTv', { id: this.parrentId })
          .then(res => {
            if (this.items.length < Number(this.childId)) {
              this.$emit('on-error', true)
            }
          })
          .catch(this.onCatch)
        }
      case 'movie': {
        return this.$store.dispatch('movie/fetchMovie', { id: this.parrentId })
          .then(res => {
            if (this.items.length < Number(this.childId)) {
              this.$emit('on-error', true)
            }
          })
          .catch(this.onCatch)
        }
      case 'person': {
        return this.$store.dispatch('person/fetchPerson', { id: this.parrentId })
          .then(res => {
            if (this.items.length < Number(this.childId)) {
              this.$emit('on-error', true)
            }
          })
          .catch(this.onCatch)
        }
    }
  },
  methods: {
    onCatch,
  }
}
</script>

<style lang="scss" scoped>
  .video {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    margin: 20px auto 50px auto;
    @media (min-width:1024px) {
      height: 100%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  iframe {
    position: absolute;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    border: none;
    @media (min-width:1024px) {
      position: relative;
      height: 55vh;
      width: 920px;
    }
  }
  img {
    object-fit: cover;
    max-height: 55vh;
    margin: 20px auto 50px auto;
  }
  main {
    padding-top: 50px;
    @media (min-width:400px) {
      padding-top: 50.69px;
    }
  }
  .status {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 55vh;
  }
  i {
    margin: 25em auto;
  }
</style>