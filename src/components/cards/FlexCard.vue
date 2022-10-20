<template>
  <li
    v-if="item.card_type === 'flex-item'"
    class="item-card"
  >
    <router-link
      :to="link"
    >
      <article @click="addRecently(item)">
        <div class="thumb">
          <img
            :src="imgURL"
            :alt="item.title + 'poster image'"
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
  </li>
</template>

<script>
import { card } from '@/components/mixins/card';

export default {
  name: 'FlexCard',
  mixins: [card]
}
</script>