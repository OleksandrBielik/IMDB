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
    <media-page @on-error="onError" />
    <div class="container">
      <slider-list :component-name="'Videos'" />
    </div>
  </main>
</template>

<script>
import MediaPage from '@/components/pages/MediaPage.vue';
import AppLoader from '@/components/errors/AppLoader.vue';
import { view } from '@/components/mixins/common/view';
const SliderList = () => import('@/components/SliderList.vue');

export default {
  name: 'VideoView',
  components: {
    MediaPage,
    SliderList,
    AppLoader,
  },
  mixins: [view],
}
</script>
