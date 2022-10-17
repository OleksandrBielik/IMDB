<template>
  <div class="home">
    <upcoming-list
      :path="$route.name"
      :component-name="'Upcoming'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Trending'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Popular'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'OnAir'"
    />
    <slider-list
      :path="$route.name"
      :component-name="'Recently'"
    />
  </div>
</template>

<script>
import SliderList from '@/components/SliderList.vue';
import UpcomingList from '@/components/UpcomingList.vue';

export default {
  name: 'HomeView',
  components: {
    SliderList,
    UpcomingList,
  }
}
</script>
