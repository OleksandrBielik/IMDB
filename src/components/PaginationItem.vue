<template>
  <li>
    <button
      :style="active"
      :disabled="disabled"
      @click.prevent="changePage"
    >
      {{ item }}
    </button>
  </li>
</template>

<script>
export default {
  name: 'PaginationItem',
  props: {
    item: {
      type: [Number, String],
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    active() {
      return this.page === this.item ? 'background-color: gray;' : ''
    },
    pathName() {
      const path = this.path.split('-')[0] + (this.path.split('-')[1][0].toUpperCase() + this.path.split('-')[1].slice(1))
      return path
    },
    pages() {
      return this.$store.getters[`${this.pathName}/getTotalPages`]
    },
    page() {
      return this.$store.getters[`${this.pathName}/getPage`]
    },
    disabled() {
      return (function() {
        if (this.item === 'FIRST') {
          return this.page === 1 ? 'disabled' : null
        } else if (this.item === 'LAST') {
          return this.page === this.pages ? 'disabled' : null
        } else if (this.item === '...') {
            return 'disabled'
          }
      }).bind(this)()
    }
  },
  methods: {
    changePage() {
      switch(this.item) {
        case 'FIRST': this.$emit('change-page', 1)
        break
        case 'LAST': this.$emit('change-page', this.pages)
        break
        default: this.$emit('change-page', this.item)
      }
    },
  }
}
</script>