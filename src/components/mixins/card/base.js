export const base = {
  computed: {
    imgURL() {
      const imgPath = this.item.poster_path || this.item.profile_path || this.item.file_path
      if (!imgPath) {
        return null
      }
      return `${process.env.VUE_APP_IMG_URL}${imgPath}`
    },
    rating() {
      if (this.item.vote_average) {
        return String(this.item.vote_average).slice(0,3)
      } else if (this.item.popularity) {
        return Math.round(this.item.popularity)
      } else {
        return null
      }
    },
    name() {
      return this.item.title || this.item.name
    },
    title() {
      if (!this.name) {
        return
      }
      if (this.name.length > 30) {
        return this.name.slice(0,30) + '...'
      } else {
        return this.name
      }
    },
    titleLg() {
      if (this.name.length > 43) {
        return this.name.slice(0,43) + '...'
      } else {
        return this.name
      }
    },
    user() {
      return this.$store.getters['auth/getUserLogin']
    },
    link() {
      switch(this.item.media_type) {
        case 'movie': return `/movie/${this.item.id}`
        case 'tv': return `/tv/${this.item.id}`
        case 'person': return `/person/${this.item.id}`
        case 'image': return `/${this.pathName}/images/${this.parrentId + '-' + (this.index + 1)}`
        case 'video': return `/${this.pathName}/videos/${this.parrentId + '-' + (this.index + 1)}`
      }
    },
    pathName() {
      try {
        if (this.$route.name.split('-').length > 1) {
          return this.$route.name.split('-')[0]
        } else {
          return this.$route.name
        }   
      } catch (error) {
        console.log(error)
      }
    },
  }
}