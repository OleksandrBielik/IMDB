<template>
  <li
    v-if="item.card_type === 'flex-item'"
    class="item-card"
  >
    <router-link
      :to="link"
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
          <div class="title-lg">
            {{ titleLg }}
          </div>
        </div>
        <div
          v-if="user"
          class="wrapper-button"
        >
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
        <router-link
          v-else
          to="/login"
          class="wrapper-button"
        >
          <button
            type="button"
            class="watch-list"
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
  </li>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { computed } from '@/components/mixins/card/computed';
import { methods } from '@/components/mixins/card/methods';

const { 
  computed: {
    link,
    imgURL,
    name,
    rating,
    title,
    titleLg,
    user,
    watchList,
    recentlyList,
    statusWatchList,
    statusRecentlyList,
  }
} = computed;

const { methods: {
    addToWatchList, 
    addToRecentlyList,
  }
} = methods;


export default {
  name: 'FlexCard',
  mixins: [props],
  computed: {
    link,
    imgURL,
    name,
    rating,
    title,
    titleLg,
    user,
    watchList,
    recentlyList,
    statusWatchList,
    statusRecentlyList,
  },
  methods: {
    addToWatchList, 
    addToRecentlyList,
  }
}
</script>

<style lang="scss" scoped>
.item-card {
  margin: 15px;
  border-radius: 5px;
  overflow: hidden;
  background-color: $card-bg-color;
  color: $white;
  width: calc((100% - 4 * 15px) / 2);
  height: 340px;
  @media (min-width:480px) {
    width: calc((100% - 6 * 15px) / 3);
  }
  @media (min-width:768px) {
    width: calc((100% - 8 * 15px) / 4);
    height: 380px;
  }
  @media (min-width:1024px) {
    width: calc((100% - 10 * 15px) / 5);
    height: 400px;
  }
  @media (min-width:1280px) {
    width: calc((100% - 10 * 15px) / 5);
    height: 470px;
  }
  a, article {
    display: block;
    height: 100%;
  }
  article {
    position: relative;
  }
  .wrapper-info {
    padding: 8px 5px;
    .wrapper {
      padding: 0;
      display: flex;
      align-items: center;
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
    margin-top: 10px;
    font-size: 18px;
    line-height: 21px;
    display: none;
    @media(min-width: 1024px) {
      display: block;
    }
    @media (min-width:1280px) {
      font-size: 18px;
    }
  }
  .media-type {
    border: 1px solid $white;
    border-radius: 10px;
    padding: 1px 5px;
    margin-left: auto;
  }
  .star-icon {
    margin-right: 5px;
  }
  .thumb {
    img {
      object-fit: cover;
      display: block;
      height: 210px;
      @media (min-width:768px) {
        height: 255px;
      }
      @media (min-width:1024px) {
        height: 274px;
      }
      @media (min-width:1280px) {
        height: 340px;
      }
    }
    img.image-not-found {
      object-fit: contain;
      transform: scale(0.8);
    }
  }
  .wrapper-button {
    position: absolute;
    left: 0;
    bottom: 10px;
    padding: 0 5px;
    width: 100%;
    height: auto;
  }
  .watch-list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px 0;
    border-radius: 5px;
    color: $light-blue-color;
    background-color: $arrow-bg-color;
    margin-top: auto;
    cursor: pointer;
    span{
      margin-left: 5px;
    }
  }
  .success {
    color: $success-color;
  }
}
</style>