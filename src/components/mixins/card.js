export const card = {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    path: {
      type: String,
      required: true
    },
  },
}

export const imgURL = {
  computed: {
    imgURL() {
      const imgPath = this.item.poster_path || this.item.profile_path || this.item.file_path
      if (!imgPath) {
        return null
      }
      return `${process.env.VUE_APP_IMG_URL}${imgPath}`
    },
  }
}

export const rating = {
  computed: {
    rating() {
      if (this.item.vote_average) {
        return String(this.item.vote_average).slice(0,3)
      } else if (this.item.popularity) {
        return Math.round(this.item.popularity)
      } else {
        return undefined
      }
    },
  }
}

export const title = {
  computed: {
    title() {
      let name = this.item.title || this.item.name
      if (!name) {
        return
      }
      if (name.length > 25) {
        return name.slice(0,25) + '...'
      } else {
        return name
      }
    },
  }
}

export const id = {
  computed: {
    parrentId() {
      return this.$route.params.id.split('-')[0]
    },
    childId() {
      return this.$route.params.id.split('-')[1]
    },
  }
}

export const link = {
  computed: {
    link() {
      switch(this.item.media_type) {
        case 'movie': return `/movie/${this.item.id}`
        case 'tv': return `/tv/${this.item.id}`
        case 'person': return `/person/${this.item.id}`
        case 'image': return `/${this.path}/images/${this.parrentId + '-' + (this.index + 1)}`
        case 'video': return `/${this.path}/videos/${this.parrentId + '-' + (this.index + 1)}`
        default: return 
      }
    }
  }
}

export const statusRecently = {
  computed: {
    statusRecently() {
      try {
        return this.items.find(item => item.id === this.item.id)
      } catch (error) {
        return null
      }
    }
  }
}

export const recently = {
  methods: {
    addToRecentlyList(item) {
      if (this.statusRecentlyList) {
        return
      }
      const res = { ...item }
      res.card_type = 'flick'
      this.$store.dispatch('home/addRecently', { item })
    },
  },
  computed: {
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
  }
}

export const watchList = {
  computed: {
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
  },
  methods: {
    addToWatchList() {
      if (this.statusWatchList) {
        return
      }
      this.$store.dispatch('watchlist/addItem', { item: this.item })
    },
  }
}