<template>
  <li>
    <button
      type="button"
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
  },
  computed: {
    active() {
      return this.page === this.item ? 'background-color: gray;' : ''
    },
    pathName() {
      try {
        const path = this.$route.name.split('-')[0] + (this.$route.name.split('-')[1][0].toUpperCase() + this.$route.name.split('-')[1].slice(1))
        return path        
      } catch (error) {
        return undefined
      }
    },
    pages() {
      return this.$store.getters[`${this.pathName || this.$route.name}/getTotalPages`]
    },
    page() {
      return this.$store.getters[`${this.pathName || this.$route.name}/getPage`]
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
      if (Number(this.item)) {
        this.$emit('change-page', this.item)
      } else {
        switch(this.item) {
          case 'FIRST': this.$emit('change-page', 1)
          break
          case 'LAST': this.$emit('change-page', this.pages)
          break
          default: return
        }
      }
      this.scrollUp()
    },
    scrollUp() {
      document.querySelector('#app').scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    color: $white;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    @media(min-width: 768px) {
      padding: 7px 12px;
    }
    @media(min-width: 1024px) {
      padding: 10px 15px;
    }
  }
  li {
    border: 1px solid $white;
    border-radius: 3px;
    overflow: hidden;
  }
  li:not(:last-child) {
  margin-right: 5px;
    @media(min-width: 768px) {
      margin-right: 7px;
    }
    @media(min-width: 1024px) {
      margin-right: 10px;
    }
  }
  .active {
    background-color: $gray;
  }
}
</style>