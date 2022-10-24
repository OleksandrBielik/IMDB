<template>
  <router-link
    :to="link"
  >
    <article class="poster-card">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="'poster image'"
        >
      </div>
    </article>
  </router-link>
</template>

<script>
import { card, imgURL, link, id } from '@/components/mixins/card'

export default {
  name: 'ImageCard',
  mixins: [card, imgURL, link, id],
}
</script>
