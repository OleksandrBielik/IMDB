<template>
  <router-link
    :to="link"
  >
    <article>
      <div class="card">
        <iframe
          :src="videoURL"
          frameborder="0"
        />
      </div>
    </article>
  </router-link>
</template>

<script>
import { card } from '@/components/mixins/card'

export default {
  name: 'VideoCard',
  mixins: [card],
  computed: {
    videoURL() {
      return `https://www.youtube.com/embed/${this.item.key}`
    }
  }
}
</script>

<style scoped>
  iframe {
    pointer-events: none;
  }
</style>
