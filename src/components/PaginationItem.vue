<template>
  <li>
    <a
      href="#"
      @click.prevent="changePage"
    >{{ item }}</a>
  </li>
</template>

<script>
export default {
  name: 'PaginationItem',
  props: {
    item: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    changePage() {
      this.$store.dispatch('search/setPage', { page: this.item })
    }
  }
}
</script>


<style scoped>
  a {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }
  li {
    border: 1px solid #fff;
    border-radius: 3px;
    overflow: hidden;
  }
</style>