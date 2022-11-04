<template>
  <main>
    <div class="container">
      <item-page @on-error="onError" />
      <slider-list
        :path="$route.name"
        :component-name="'Similar'"
      />
      <slider-list
        :path="$route.name"
        :component-name="'Credits'"
      />
      <slider-list
        :id="'images'"
        :path="$route.name"
        :component-name="'Images'"
      />
      <slider-list
        :id="'videos'"
        :path="$route.name"
        :component-name="'Videos'"
      />
      <slider-list
        :path="$route.name"
        :component-name="'Recently'"
      />
    </div>
  </main>
</template>

<script>
import ItemPage from '@/components/ItemPage';
import SliderList from '@/components/SliderList';
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'MovieView',
  components: { 
    ItemPage, 
    SliderList,
  },
  mixins: [scrollUp],
  watch: {
    $route(to, from) {
      this.$store.dispatch('movie/fetchMovie', { id: this.$route.params.id })
    },
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 50)
  },
  methods: {
    onError(val) {
      this.$emit('on-error', val)
    }
  }
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