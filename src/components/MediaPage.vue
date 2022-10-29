<template>
  <main>
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
    items() {
      switch(this.media) {
        case 'images': return this.$store.getters[`${this.path}/getImages`][this.childId-1]
        case 'videos': return this.$store.getters[`${this.path}/getVideos`][this.childId-1]
        default: return undefined
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
    switch(this.path) {
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
    padding-top: 56.25%;
    margin: 20px auto 50px auto;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  img {
    max-height: 800px;
    margin: 20px auto 50px auto;
  }
  main {
    padding-top: 50px;
    @media (min-width:400px) {
      padding-top: 50.69px;
    }
  }
</style>