<template>
  <router-link
    v-if="item.media_type === 'tv' && !item.card_type"
    :to="link"
    class="poster-card"
  >
    <article @click="addRecently(item)">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.name + 'image'"
        >
      </div>
    </article>
  </router-link>
</template>

<script>
import { card, imgURL, link, addRecently } from '@/components/mixins/card';

export default {
  name: 'TvCard',
  mixins: [card, imgURL, link, addRecently]
}
</script>