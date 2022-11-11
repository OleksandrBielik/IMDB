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