<template>
  <div class="container">
    <ul>
      <item-card
        v-for="item in items"
        :key="item.id"
        class="card"
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
    ItemCard
  },
  computed: {
    items() {
      return this.$store.getters['search/getItems']
    }
  },
  // mounted() {
  //   this.$store.dispatch('search/onSearch', { query: this.$route.query.query, page: this.$route.query.page })
  // }
}
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: -8px;
    padding: 20px 0;
  }
  .card {
    margin: 8px;
    border-radius: 5px;
    overflow: hidden;
  }
  .container {
    max-width: 1280px;
    padding: 0 15px;
    margin: 0 auto;
  }
</style>