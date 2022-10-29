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
      console.log(this.page, this.item)
      return this.page === this.item ? 'background-color: gray;' : ''
    },
    pathName() {
      try {
        const path = this.path.split('-')[0] + (this.path.split('-')[1][0].toUpperCase() + this.path.split('-')[1].slice(1))
        return path        
      } catch (error) {
        return undefined
      }
    },
    pages() {
      return this.$store.getters[`${this.pathName || this.path}/getTotalPages`]
    },
    page() {
      return this.$store.getters[`${this.pathName || this.path}/getPage`]
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