<template>
  <router-link
    v-if="item.media_type === 'person' && !item.card_type"
    :to="link"
    class="person-card"
  >
    <article @click="addRecently(item)">
      <div class="thumb">
        <img
          v-if="imgURL"
          :src="imgURL"
          :alt="item.title + 'poster image'"
        >
        <img
          v-else
          class="image-not-found"
          src="../../assets/image-not-found-icon.svg"
          alt="image not found"
        >
      </div>
      <p class="name">
        {{ item.name }}
      </p>
    </article>
  </router-link>
</template>

<script>
import { card, imgURL, link, addRecently } from '@/components/mixins/card';

export default {
  name: 'PersonCard',
  mixins: [card, imgURL, link, addRecently]
}
</script>