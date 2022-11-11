<template>
  <router-link
    :to="link"
    class="card"
    :aria-label="`${title} card`"
  >
    <article @click="addToRecentlyList(item)">
      <div class="thumb">
        <img
          v-if="imgURL"
          :src="imgURL"
          :alt="name + ' poster'"
        >
        <div
          v-else
          class="image-not-found"
        >
          Image not found
        </div>
      </div>
      <div class="wrapper-info">
        <div class="wrapper">
          <svg
            class="star-icon"
            width="15"
            height="15"
          >
            <use href="../../assets/sprite.svg#icon-big-star" />
          </svg>
          <div class="rating">
            {{ rating }}
          </div>
          <div class="media-type">
            {{ item.media_type }}
          </div>
        </div>
        <h2 class="title">
          {{ title }}
        </h2>
        <h2 class="title-lg">
          {{ titleLg }}
        </h2>
      </div>
      <div
        v-if="user"
        class="wrapper-button"
      >
        <button
          type="button"
          class="watch-list"
          :class="{success: statusWatchList}"
          aria-label="Add to watchlist button"
          @click.prevent.stop="addToWatchList"
        >
          <svg
            v-if="statusWatchList"
            width="24"
            height="24"
          >
            <use href="../../assets/sprite.svg#icon-success" />
          </svg>
          <svg
            v-else-if="!statusWatchList"
            width="24"
            height="24"
          >
            <use href="../../assets/sprite.svg#icon-plus" />
          </svg>
          <span>Watchlist</span>
        </button>
      </div>
      <router-link
        v-else
        to="/login"
        class="wrapper-button"
      >
        <button
          type="button"
          class="watch-list"
          tabindex="-1"
          aria-label="Add to watchlist button"
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
      </router-link>
    </article>
  </router-link>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { base } from '@/components/mixins/card/base';
import { recently } from '@/components/mixins/card/recently';
import { watchlist } from '@/components/mixins/card/watchlist';

export default {
  name: 'BaseCard',
  mixins: [props, recently, watchlist, base],
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 8px;
    border-radius: 5px;
    overflow: hidden;
    @media (min-width:1024px) {
      margin: 12px;
    }
  }
  article {
    position: relative;
    width: 124px;
    height: 320px;
    background-color: $card-bg-color;
    @media (min-width:768px) {
      width: 159px;
      height: 370px;
    }
    @media (min-width:1024px) {
      width: 185px;
      height: 400px;
    }
  }
  .title {
    text-align: left;
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    @media(min-width: 1024px) {
      display: none;
    }
  }
  .title-lg {
    text-align: left;
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    display: none;
    @media(min-width: 1024px) {
      display: block;
    }
  }
  .thumb {
    img {
      object-fit: cover;
      display: block;
      width: 124px;
      height: 184px;
      @media (min-width:768px) {
        width: 159px;
        height: 236px;
      }
      @media (min-width:1024px) {
        width: 185px;
        height: 274px;
      }
    }
  .image-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 184px;
    @media (min-width:768px) {
      width: 159px;
      height: 236px;
    }
    @media (min-width:1024px) {
      width: 185px;
      height: 274px;
    }
  }
  }
</style>