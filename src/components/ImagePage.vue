<template>
  <img
    :src="imgURL"
    alt="image"
  >
</template>

<script>
export default {
  name: 'ImagePage',
  computed: {
    path() {
      return this.$route.name.split('-')[0]
    },
    id() {
      return this.$route.params.id.split('-')
    },
    items() {
      return this.$store.getters[`${this.path}/getImages`][this.id[1]-1]
    },
    imgURL() {
      try {
        return `${process.env.VUE_APP_IMG_URL}${this.items.poster_path || this.items.profile_path || this.items.file_path}`
      } catch (error) {
        return ''
      }
    },
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
