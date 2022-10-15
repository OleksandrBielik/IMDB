export const card = {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.item.poster_path || this.item.profile_path}`
    },
    rating() {
      if (this.item.vote_average) {
        return String(this.item.vote_average).slice(0,3)
      } else if (this.item.popularity) {
        return Math.round(this.item.popularity)
      } else {
        return undefined
      }
    },
    title() {
      let name = this.item.title || this.item.name
      if (name.length > 25) {
        return name.slice(0,25) + '...'
      } else {
        return name
      }
    },
    link() {
      switch(this.item.media_type) {
        case 'movie': return `/movie/${this.item.id}`
        case 'tv': return `/tv/${this.item.id}`
        case 'person': return `/person/${this.item.id}`
        default: return 
      }
    }
  },
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