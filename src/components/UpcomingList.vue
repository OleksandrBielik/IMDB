<template>
  <div class="upcoming">
    <div class="container">
      <Flicking
        ref="flicking"
        :options="{ moveType: ['strict', { count: 1 }], circular: true, bounce: '4%' }"
        :plugins="plugins"
      >
        <upcoming-card
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </Flicking>
      <button
        class="arrow-next"
        :style="styleObject"
        @click.prevent="next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ><path
          d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
          style="fill:currentColor"
        /></svg>
      </button>
      <button
        class="arrow-prev"
        :style="styleObject"
        @click.prevent="prev"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ><path
          d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
          style="fill:currentColor"
        /></svg>
      </button>
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import UpcomingCard from '@/components/cards/UpcomingCard.vue';

export default {
  name: 'UpcomingList',
  components: {
    Flicking,
    UpcomingCard
  },
  data() {
    return {
      plugins: [new AutoPlay({ duration: 3000, direction: 'NEXT', stopOnHover: false })],
      opacity: '0'
    }
  },
  computed: {
    items() {
      return this.$store.getters['home/getUpcoming']
    },
    styleObject() {
      return {
        'opacity': this.opacity
      }
    }
  },
  mounted() {
    this.$store.dispatch('home/fetchUpcoming')
    this.initArrows()
  },
  methods: {
    next() {
      this.$refs.flicking.next();
    },
    prev() {
      this.$refs.flicking.prev();
    },
    initArrows() {
      setTimeout(()=> this.opacity = 1, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .upcoming {
    margin-bottom: 20px;
    @media (min-width:1440px) {
      margin-bottom: 80px;
    }
  }
  .container {
    position: relative;
    padding: 0;
  }
  .arrow-next {
    right: 20px;
  }
  .arrow-prev {
    left: 20px;
  }
</style>