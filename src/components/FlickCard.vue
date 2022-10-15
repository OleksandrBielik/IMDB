<template>
  <a
    v-if="item.media_type === 'tv' && !item.card_type"
    :to="link"
    class="poster-card"
    @click.prevent="addRecently(item)"
  >
    <article>
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.name + 'image'"
        >
      </div>
    </article>
  </a>
  <a
    v-else-if="item.media_type === 'person' && !item.card_type"
    :to="link"
    class="person-card"
    @click.prevent="addRecently(item)"
  >
    <article>
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.name + 'image'"
        >
      </div>
      <p class="name">{{ item.name }}</p>
    </article>
  </a>
  <a
    v-else-if="item.card_type === true"
    :to="link"
    class="card"
    @click.prevent="addRecently(item)"
  >
    <article>
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
            src="../assets/star-icon.svg"
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
  </a>
</template>

<script>
import { card } from '@/components/mixins/card';

export default {
  mixins: [card]
}
</script>