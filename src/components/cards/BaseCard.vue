<template>
  <router-link
    :to="link"
    class="card"
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
      <div class="wrapper">
        <div class="wrapper">
          <img
            class="star-icon"
            src="../../assets/star-icon.svg"
            alt="rating icon"
            width="15"
          >
          <div class="rating">
            {{ rating }}
          </div>
          <div class="media-type">
            {{ item.media_type }}
          </div>
        </div>
        <div class="title">
          {{ title }}
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
import { card, rating, imgURL, title, link, addRecently } from '@/components/mixins/card';

export default {
  name: 'BaseCard',
  mixins: [card, rating, imgURL, title, link, addRecently]
}
</script>