export const scrollUp = {
  methods: {
    scrollUp() {
      document.querySelector('#app').scrollIntoView({ block: 'start', behavior: 'auto' })
    },
  }
}