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
  mounted() {
    console.log(this.item)
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

<style lang="scss" scoped>
  button {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;
    @media(min-width: 768px) {
      padding: 7px 12px;
    }
    @media(min-width: 1024px) {
      padding: 10px 15px;
    }
  }
  li {
    border: 1px solid #fff;
    border-radius: 3px;
    overflow: hidden;
  }
</style>