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
import { card } from '@/components/mixins/card'

export default {
  name: 'ImageCard',
  mixins: [card],
}
</script>
