<template>
  <div class="card">
    <popular-card
      v-if="item.card_type === 'PopularCard'"
      :item="item"
    />
    <trending-card
      v-if="item.card_type === 'TrendingCard'"
      :item="item"
    />
    <on-air-card
      v-if="item.card_type === 'OnAirCard'"
      :item="item"
    />
  </div>
</template>

<script>
import PopularCard from './PopularCard.vue';
import TrendingCard from './TrendingCard.vue';
import OnAirCard from './OnAirCard.vue';

export default {
  name: 'RecentlyCard',
  components: {
    PopularCard,
    TrendingCard,
    OnAirCard
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
  .card {
    margin: 8px;
    border-radius: 5px;
    overflow: hidden;
    @media (min-width:1024px) {
      margin: 12px;
    }
  }
</style>