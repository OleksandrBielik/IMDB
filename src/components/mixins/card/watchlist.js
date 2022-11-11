export const watchlist = {
  data() {
    return {
      watchlist: false
    }
  },
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
    },
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