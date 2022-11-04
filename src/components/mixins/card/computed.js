export const computed = {
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
    link() {
      switch(this.item.media_type) {
        case 'movie': return `/movie/${this.item.id}`
        case 'tv': return `/tv/${this.item.id}`
        case 'person': return `/person/${this.item.id}`
        case 'image': return `/${this.$route.name}/images/${this.parrentId + '-' + (this.index + 1)}`
        case 'video': return `/${this.$route.name}/videos/${this.parrentId + '-' + (this.index + 1)}`
      }
    },
    parrentId() {
      return this.$route.params.id.split('-')[0]
    },
    childId() {
      return this.$route.params.id.split('-')[1]
    },
    user() {
      return this.$store.getters['auth/getUserLogin']
    },
    statusRecently() {
      try {
        return this.items.find(item => item.id === this.item.id)
      } catch (error) {
        return null
      }
    },
    recentlyList() {
      return this.$store.getters['home/getRecently']
    },
    statusRecentlyList() {
      try {
        return this.recentlyList.find(item => item.id === this.item.id)
      } catch (error) {
        return null
      }
    },
    watchList() {
      return this.$store.getters['watchlist/getItems']
    },
    statusWatchList() {
      try {
        return this.watchList.find(item => item.id === this.item.id)
      } catch (error) {
        return null
      }
    }
  }
}