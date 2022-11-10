export const view = {
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(()=> this.loading = false, 1000)
    setTimeout(()=> this.scrollUp(), 50)
  },
  methods: {
    scrollUp() {
      document.querySelector('#app').scrollIntoView({ block: 'start', behavior: 'auto' })
    },
    onError(val) {
      this.$emit('on-error', val)
    },
  }
}