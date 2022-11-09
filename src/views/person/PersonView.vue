<template>
  <main>
    <transition name="fade">
      <div
        v-if="loading"
        class="status-global"
      >
        <app-loader />
      </div>
    </transition>
    <div class="container">
      <person-page @on-error="onError" />
      <slider-list :component-name="'Credits'" />
      <slider-list :component-name="'Images'" />
      <slider-list :component-name="'Recently'" />
    </div>
  </main>
</template>

<script>
import PersonPage from '@/components/pages/PersonPage.vue';
import AppLoader from '@/components/errors/AppLoader.vue';
import { view } from '@/components/mixins/common/view';
const SliderList = () => import('@/components/SliderList.vue');

export default {
  name: 'PersonView',
  components: { 
    PersonPage, 
    SliderList,
    AppLoader,
  },
  mixins: [view],
  watch: {
    $route(to, from) {
      this.$store.dispatch('person/fetchPerson', { id: this.$route.params.id })
      setTimeout(()=> this.scrollUp(), 50)
      this.$store.dispatch('person/fetchCredits', { id: this.$route.params.id, page: 1 })
    }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    @media(min-width:600px) {
      max-width: 600px;
    }
    @media(min-width:768px) {
      max-width: 768px;
    }
    @media(min-width:975px) {
      max-width: 975px;
    }
    @media(min-width:1280px) {
      max-width: 1280px;
    }
  }
</style>