export const methods = {
  methods: {
    addToRecentlyList(item) {
      if (this.statusRecentlyList) {
        return
      }
      const res = { ...item, card_type: 'flick' }
      this.$store.dispatch('home/addRecently', { item: res })
    },
    addToWatchList() {
      if (this.statusWatchList) {
        return
      }
      this.$store.dispatch('watchlist/addItem', { item: this.item })
    },
  },
}