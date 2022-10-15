<template>
  <li class="item-card">
    <a
      href="#"
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
            <div class="rating">{{ rating }}</div>
            <div class="media-type">{{ item.media_type }}</div>
          </div>
          <div class="title">{{ title }}</div>
        </div>
      </article>
    </a>
  </li>
</template>

<script>
import { card } from '@/components/mixins/card';

export default {
  name: 'ItemCard',
  mixins: [card]
}
</script>