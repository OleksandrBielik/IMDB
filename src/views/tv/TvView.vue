<template>
  <div class="container">
    <item-page :path="$route.name" />
    <slider-list
      :path="$route.name"
      :component-name="'Similar'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Credits'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Images'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Videos'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Recently'"
    />
  </div>
</template>

<script>
import SliderList from '@/components/SliderList.vue'
import ItemPage from '@/components/pages/ItemPage.vue'
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'TvView',
  components: { ItemPage, SliderList },
  mixins: [scrollUp],
  watch: {
    $route(to, from) {
      this.$store.dispatch('tv/fetchTv', { id: this.$route.params.id })
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 1000)
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