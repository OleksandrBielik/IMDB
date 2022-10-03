<template>
  <div class="on-air">
    <div class="container">
      <h2>On the air</h2>
      <p class="description">
        List of shows that are currently on the air
      </p>
      <Flicking
        ref="flicking"
        :options="{ moveType: 'freeScroll', bound: true, bounce: '4%' }"
      >
        <on-air-card
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
import OnAirCard from './OnAirCard.vue';

export default {
  name: 'OnAirList',
  components: { 
    Flicking,
    OnAirCard
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
    this.$store.dispatch('home/fetchOnAir')
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
.on-air {
  color: #fff;
  margin: 20px 0;
  background-color: #121212;
  @media(min-width:1024px) {
    background-color: black;
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
  margin-bottom: 25px;
}
.arrow-next, .arrow-prev {
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 30px;
  height: 40px;
  color: #fff;
  background-color: rgba(90, 90, 90, 0.5);
  z-index: 2;
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover, &:focus {
    color: #F5C518;
  }
  @media(min-width:768px) {
    width: 50px;
    height: 70px;
  }
  @media(min-width:1440px) {
    width: 70px;
    height: 100px;
  }
}
.arrow-next {
  right: 20px;
}
.arrow-prev {
  left: 20px;
}
</style>