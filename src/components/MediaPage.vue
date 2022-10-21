<template>
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
</template>

<script>
export default {
  name: 'MediaPage',
  computed: {
    path() {
      return this.$route.name.split('-')[0]
    },
    media() {
      return this.$route.name.split('-')[1]
    },
    id() {
      return this.$route.params.id.split('-')
    },
    items() {
      switch(this.media) {
        case 'images': return this.$store.getters[`${this.path}/getImages`][this.id[1]-1]
        case 'videos': return this.$store.getters[`${this.path}/getVideos`][this.id[1]-1]
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
    switch(this.path) {
      case 'tv': this.$store.dispatch('tv/fetchTv', { id: this.id[0] })
      break
      case 'movie': this.$store.dispatch('movie/fetchMovie', { id: this.id[0] })
      break
    }
  }
}
</script>

<style scoped>
  .video {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
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
</style>