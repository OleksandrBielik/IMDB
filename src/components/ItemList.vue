<template>
  <div class="container">
    <ul>
      <item-card
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'ItemList',
  components: {
    ItemCard,
  },
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    items() {
      return this.$store.getters[`${this.path.slice(1)}/getItems`]
    },
    totalPages() {
      return this.$store.getters[`${this.path.slice(1)}/getTotalPages`]
    },
  },
  mounted() {
    switch(this.path) {
      case '/search': this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
      break
      case '/trending': this.$store.dispatch('trending/getTrending', { page: this.$route.query.page })
      break
      case '/popular': this.$store.dispatch('popular/getPopular', { page: this.$route.query.page })
      break
      case '/onAir': this.$store.dispatch('onAir/getOnAir', { page: this.$route.query.page })
      break
      default: return
    }
  },
}


</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
    padding: 20px 0;
    max-width: 320px;
    @media(min-width: 480px) {
      max-width: 480px;
    }
    @media(min-width: 768px) {
      max-width: 768px;
    }
    @media(min-width: 1024px) {
      max-width: 1024px;
    }
    @media(min-width: 1280px) {
      max-width: 1280px;
    }
  }
  .container {
    max-width: 1280px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>