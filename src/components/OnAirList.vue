<template>
  <div class="on-air flick">
    <div class="container">
      <h2>On the air</h2>
      <p class="description">
        List of shows that are currently on the air
      </p>
      <div class="wrapper">
        <router-link
          to="/onAir?page=1"
          class="link"
        >
          Get more currently on-air>
        </router-link>
      </div>
      <Flicking
        ref="flicking"
        :options="{ moveType: 'freeScroll', bound: true, bounce: '4%' }"
      >
        <flick-card
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </Flicking>
      <button
        v-if="!last"
        class="arrow-next"
        @click.prevent="moveEnd"
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
        v-if="last"
        class="arrow-prev"
        @click.prevent="moveStart"
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
import FlickCard from './FlickCard.vue';

export default {
  name: 'OnAirList',
  components: { 
    Flicking,
    FlickCard
  },
  data() {
    return {
      last: false
    }
  },
  computed: {
    items() {
      return this.$store.getters['home/getOnAir']
    }
  },
  mounted() {
    this.$store.dispatch('home/fetchOnAir', { page: 1 })
  },
  methods: {
    moveEnd() {
      this.$refs.flicking.moveTo(this.items.length-1);
      this.last = true
    },
    moveStart() {
      this.$refs.flicking.moveTo(0);
      this.last = false
    }
  }
}
</script>

<style lang="scss" scoped>

.link {
  color: blue;
}
.wrapper {
  text-align: right;
}
</style>