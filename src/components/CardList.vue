<template>
  <ul class="card-list">
    <item-card
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'CardList',
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