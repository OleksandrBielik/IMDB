<template>
  <div class="trending">
    <div class="container">
      <h2>Fan favorites</h2>
      <p class="description">
        This week's top TV and movies
      </p>
      <Flicking :options="{ moveType: 'freeScroll', bound: true, bounce: '4%' }">
        <trending-card
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </Flicking>
    </div>
  </div>
</template>


<script>
import TrendingCard from './TrendingCard.vue';
import { Flicking } from '@egjs/vue-flicking';

export default {
  name: 'TrendingList',
  components: { 
    TrendingCard,
    Flicking
  },
  computed: {
    items() {
      return this.$store.getters['home/getTrending']
    }
  },
  mounted() {
    this.$store.dispatch('home/fetchTrending')
  }
}
</script>

<style scoped>

  .trending {
    color: #fff;
    margin: 20px 0;
  }
  .container {
    max-width: 1280px;
    padding: 0 15px;
    margin: 0 auto;
  }
  h2 {
    font-size: 30px;
    margin-bottom: 5px;
  }
  .description {
    margin-bottom: 25px;
  }
</style>
