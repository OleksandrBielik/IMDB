<template>
  <div class="home">
    <upcoming-list
      :path="$route.path"
      :component-name="'Upcoming'"
    />
    <slider-list
      :path="$route.path"
      :component-name="'Trending'"
    />
    <slider-list
      :path="$route.path"
      :component-name="'Popular'"
    />
    <slider-list
      :path="$route.path"
      :component-name="'OnAir'"
    />
    <slider-list
      :path="$route.path"
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
