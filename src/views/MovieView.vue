<template>
  <div class="movie">
    <item-page :path="$route.path" />
  </div>
</template>

<script>
import ItemPage from '@/components/ItemPage.vue';

export default {
  name: 'MovieView',
  components: { ItemPage }
}
</script>