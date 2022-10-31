<template>
  <router-link
    :to="link"
    class="card"
  >
    <article @click="addToRecentlyList(item)">
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
      <div class="wrapper-info">
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
      <div class="wrapper-button">
        <button
          type="button"
          class="watch-list"
          :class="{success: statusWatchList}"
          @click.prevent.stop="addToWatchList"
        >
          <svg
            v-if="statusWatchList"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          ><path
            fill="none"
            d="M0 0h24v24H0V0z"
          /><path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z" /></svg>
          <svg
            v-else-if="!statusWatchList"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          ><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" /></svg>
          <span>Watchlist</span>
        </button>
      </div>
    </article>
  </router-link>
</template>

<script>
import { card, rating, imgURL, title, link, recently, watchList } from '@/components/mixins/card';

export default {
  name: 'BaseCard',
  mixins: [card, rating, imgURL, title, link, recently, watchList],
  data() {
    return {
      watchlist: false
    }
  },
}
</script>