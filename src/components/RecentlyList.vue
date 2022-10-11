<template>
  <div class="recently">
    <div class="container">
      <h2>Recently viewed</h2>
      <p
        v-if="!items.length"
        class="description"
      >
        You have no recently viewed pages
      </p>
      <Flicking
        v-else
        ref="flicking"
        :options="{ moveType: 'freeScroll', bound: true, align: 'prev', bounce: '4%' }"
      >
        <recently-card
          v-for="(item, index) in items"
          :key="index + ' ' + item.id"
          :item="item"
        />
      </Flicking>
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import RecentlyCard from '@/components/RecentlyCard.vue';

export default {
  name: 'RecentlyList',
  components: { 
    Flicking,
    RecentlyCard,
  },
  computed: {
    items() {
      return this.$store.getters['home/getRecently']
    }
  },
}
</script>

<style lang="scss" scoped>

  .recently {
    color: #fff;
    margin-top: 20px;
    background-color: #121212;
    @media(min-width:1024px) {
      background-color: black;
    }
  }
  .card {
    margin: 8px;
    border-radius: 5px;
    overflow: hidden;
    @media (min-width:1024px) {
      margin: 12px;
    }
  }
  .container {
    max-width: 1280px;
    padding: 0 15px;
    margin: 0 auto;
    position: relative;
  }
  h2 {
    font-size: 30px;
    margin-bottom: 5px;
  }
  .description {
    padding: 20px 0;
  }
</style>