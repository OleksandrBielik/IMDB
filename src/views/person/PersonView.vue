<template>
  <main>
    <div class="container">
      <person-page @on-error="onError" />
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
        :component-name="'Recently'"
      />
    </div>
  </main>
</template>

<script>
import PersonPage from '@/components/PersonPage';
import SliderList from '@/components/SliderList.vue';
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'PersonView',
  components: { 
    PersonPage, 
    SliderList,
  },
  mixins: [scrollUp],
  watch: {
    $route(to, from) {
      this.$store.dispatch('person/fetchPerson', { id: this.$route.params.id })
    }
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