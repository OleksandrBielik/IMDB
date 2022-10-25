<template>
  <section class="upcoming">
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
    </div>
  </section>
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
      plugins: [new AutoPlay({ duration: 3000, direction: 'NEXT', stopOnHover: false })]
    }
  },
  computed: {
    items() {
      return this.$store.getters['home/getUpcoming']
    },
  },
  mounted() {
    this.$store.dispatch('home/fetchUpcoming', { page:1 })
  },
}
</script>

<style lang="scss" scoped>
  .upcoming {
    margin: 48px 0 50px 0;
    @media (min-width:1024px) {
      margin-bottom: 100px;
    }
    @media (min-width:400px) {
      margin-top: 50.69px;
    }
  }
  .container {
    position: relative;
    padding: 0;
  }
</style>