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
    pages() {
      return this.$store.getters[`${this.path.slice(1)}/getTotalPages`]
    },
    page() {
      return this.$store.getters[`${this.path.slice(1)}/getPage`]
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