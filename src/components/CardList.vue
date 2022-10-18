<template>
  <ul class="card-list">
    <card-item
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'CardList',
  components: {
    CardItem,
  },
  props: {
    path: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    items() {
      return this.$store.getters[`${this.path}/getItems`]
    },
    totalPages() {
      return this.$store.getters[`${this.path}/getTotalPages`]
    },
  },
  mounted() {
    switch(this.path) {
      case 'search': this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
      break
      case 'trending': this.$store.dispatch('trending/getTrending', { page: this.$route.query.page })
      break
      case 'popular': this.$store.dispatch('popular/getPopular', { page: this.$route.query.page })
      break
      case 'onAir': this.$store.dispatch('onAir/getOnAir', { page: this.$route.query.page })
      break
      case 'similar': this.$store.dispatch(`similar/getSimilar${this.type}`, { page: this.$route.query.page, id: this.$route.params.id })
      break
      default: return
    }
  },
}
</script>