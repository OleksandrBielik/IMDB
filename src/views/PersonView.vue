<template>
  <div class="container">
    <person-page :path="$route.name" />
    <!-- <slider-list
      :path="$route.name"
      :component-name="'Similar'"
    /> -->
    <slider-list
      :path="$route.name"
      :component-name="'Credits'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Images'"
    />
    <!-- <slider-list
      :path="$route.name"
      :component-name="'Videos'"
    /> -->
    <slider-list
      :path="$route.name"
      :component-name="'Recently'"
    />
  </div>
</template>

<script>
import PersonPage from '@/components/PersonPage';
import SliderList from '@/components/SliderList.vue';

export default {
  name: 'PersonView',
  components: { PersonPage, SliderList },
  watch: {
    $route(to, from) {
      this.$store.dispatch('person/fetchPerson', { id: this.$route.params.id })
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