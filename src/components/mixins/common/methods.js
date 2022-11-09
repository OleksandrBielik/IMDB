export const methods = {
  methods: {
    scrollUp() {
      document.querySelector('#app').scrollIntoView({ block: 'start', behavior: 'auto' })
    },
    changePage(page) {
      this.$router.push({ query: { page } })
    },
    onError(val) {
      this.$emit('on-error', val)
    },
    onCatch(error) {
      if (error.response.status === 404) {
        this.$emit('on-error', { status: true, type: 404 })
      } else {
        this.$store.commit(`${this.pathName}/setLoading`, false)
        this.error = { status: true, type: 'base' }
      } 
    },
    onCatchComp(error) {
      this.error = { status: true, type: 'base' }
    },

  }
}