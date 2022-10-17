<template>
  <div class="movie">
    <item-page :path="$route.name" />
    <slider-list
      :path="$route.name"
      :component-name="'Similar'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Recently'"
    />
  </div>
</template>

<script>
import ItemPage from '@/components/ItemPage';
import SliderList from '@/components/SliderList';

export default {
  name: 'MovieView',
  components: { ItemPage, SliderList }
}
</script>