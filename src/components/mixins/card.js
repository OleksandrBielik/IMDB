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
      return `${process.env.VUE_APP_IMG_URL}${this.item.poster_path || this.item.profile_path || this.item.file_path}`
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

export const addRecently = {
  methods: {
    addRecently(item) {
      const res = { ...item }
      res.card_type = 'flick'
      if (!localStorage.getItem('items')) {
        localStorage.setItem('items', JSON.stringify([res]))
      } else {
          localStorage.setItem('items', JSON.stringify([...JSON.parse(localStorage.getItem('items')), res]))
      }
      this.$store.dispatch('home/addRecently', { item: res })
    }
  }
}