<template>
  <main>
    <media-page :path="path" />
    <div class="container">
      <slider-list
        :path="path"
        :component-name="'Images'"
      />
    </div>
  </main>
</template>

<script>
import MediaPage from '@/components/pages/MediaPage.vue';
import SliderList from '@/components/SliderList.vue';
import { scrollUp } from '@/components/mixins/common/scrollUp';

export default {
  name: 'ImageView',
  components: {
    MediaPage,
    SliderList
  },
  mixins: [scrollUp],
  computed: {
    path() {
      return this.$route.name.split('-')[0]
    },
    id() {
      return this.$route.params.id.split('-')
    },
    media() {
      return this.$route.name.split('-')[1]
    },
  },
  watch: {
    $route(to, from) {
      switch(this.media) {
        case 'movie': this.$store.dispatch('movie/fetchMovie', { id: this.id })
        break
        case 'tv': this.$store.dispatch('tv/fetchTv', { id: this.id })
        break
        case 'person': this.$store.dispatch('person/fetchPerson', { id: this.id })
        break
        default: return
      }
      
    }
  },
  mounted() {
    setTimeout(()=> this.scrollUp(), 1000)
  },
}
</script>
