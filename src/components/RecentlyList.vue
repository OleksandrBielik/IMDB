<template>
  <div class="recently flick">
    <div class="container">
      <h2>Recently viewed</h2>
      <div class="wrapper">
        <button
          v-if="items.length"
          type="button"
          class="link"
          @click="removeRecently"
        >
          Clear recently viewed
        </button>
      </div>
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
        <flick-card
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
import FlickCard from './FlickCard.vue';

export default {
  name: 'RecentlyList',
  components: { 
    Flicking,
    FlickCard,
  },
  computed: {
    items() {
      return this.$store.getters['home/getRecently']
    }
  },
  methods: {
    removeRecently() {
      this.$store.dispatch('home/removeRecently')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: inherit;
}
.link {
  color: $blue;
}
.wrapper {
  text-align: right;
}
</style>