<template>
  <main>
    <div class="container">
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
export default {
  name: 'MediaPage',
  props: {
    path: {
      type: String,
      required: true
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
    items() {
      switch(this.media) {
        case 'images': return this.$store.getters[`${this.pathName}/getImages`][this.childId-1]
        case 'videos': return this.$store.getters[`${this.pathName}/getVideos`][this.childId-1]
        default: return null
      }
    },
    imgURL() {
      try {
        return `${process.env.VUE_APP_IMG_URL}${this.items.poster_path || this.items.profile_path || this.items.file_path}`
      } catch (error) {
        return ''
      }
    },
    videoURL() {
      try {
        return `https://www.youtube.com/embed/${this.items.key}`
      } catch (error) {
        return ''
      }
    }
  },
  mounted() {
    this.scrollUp()
    switch(this.pathName) {
      case 'tv': this.$store.dispatch('tv/fetchTv', { id: this.parrentId })
      break
      case 'movie': this.$store.dispatch('movie/fetchMovie', { id: this.parrentId })
      break
      case 'person': this.$store.dispatch('person/fetchPerson', { id: this.parrentId })
      break
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
      width: 1024px;
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
</style>