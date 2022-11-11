export const recently = {
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
  },
  methods: {
    addToRecentlyList(item) {
      if (this.statusRecentlyList) {
        return
      }
      const res = { ...item, card_type: 'flick' }
      this.$store.dispatch('home/addRecently', { item: res })
    },
  }

}