<template>
  <section class="upcoming">
    <h2 class="visually-hidden">
      Upcoming
    </h2>
    <div class="container">
      <template v-if="loading || error.status">
        <div
          v-if="loading"
          class="status"
        >
          <app-loader />
        </div>
        <error-comp
          v-else-if="error.status"
          class="status"
        />
      </template>
      <Flicking
        v-else
        ref="flicking"
        :options="{ moveType: ['strict', { count: 1 }], circular: true, bounce: '4%', renderOnlyVisible: true }"
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
import UpcomingCard from '@/components/cards/UpcomingCard.vue';
import ErrorComp from '@/components/errors/AppError.vue';
import AppLoader from '@/components/errors/AppLoader.vue';
import { Flicking } from '@egjs/vue-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import { methods } from '@/components/mixins/common/methods';

const { methods: {
  onCatchComp,
} } = methods;

export default {
  name: 'UpcomingList',
  components: {
    Flicking,
    UpcomingCard,
    ErrorComp,
    AppLoader,
  },
  data() {
    return {
      plugins: [new AutoPlay({ duration: 3000, direction: 'NEXT', stopOnHover: false })],
      loading: true,
      error: { status: false, type: null },
    }
  },
  computed: {
    items() {
      return this.$store.getters['home/getUpcoming']
    },
  },
  async mounted() {
    return this.$store.dispatch('home/fetchUpcoming', { page:1 })
      .then(this.onThen)
      .catch(this.onCatchComp)
  },
  methods: {
    onCatchComp,
    onThen(res) {
      this.loading = false
    }
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
  .status {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 280px;
    @media (min-width: 375px) {
      height: 311px;
    }
    @media (min-width: 425px) {
      height: 339px;
    }
    @media (min-width: 768px) {
      height: 432px;
    }
    @media (min-width: 1024px) {
      height: 572px;
    }
    @media (min-width: 1280px) {
      height: 720px;
    }
  }
  i {
    margin: 10em auto;
    @media (min-width: 375px) {
      margin: 11em auto;
    }
    @media (min-width: 425px) {
      margin: 12em auto;
    }
    @media (min-width: 768px) {
      margin: 15em auto;
    }
    @media (min-width: 1024px) {
      margin: 20em auto;
    }
    @media (min-width: 1280px) {
      margin: 25em auto;
    }
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>