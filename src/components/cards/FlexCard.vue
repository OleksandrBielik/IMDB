<template>
  <li
    v-if="item.card_type === 'flex-item'"
    class="card"
  >
    <router-link
      :to="link"
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
        </router-link>
      </article>
    </router-link>
  </li>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { base } from '@/components/mixins/card/base';
import { recently } from '@/components/mixins/card/recently';
import { watchlist } from '@/components/mixins/card/watchlist';

export default {
  name: 'FlexCard',
  mixins: [props, recently, watchlist, base],
}
</script>

<style lang="scss" scoped>
.card {
  margin: 15px;
  border-radius: 5px;
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
  a {
    outline-color: $element-color;
    outline-width: 30px;
  }
  article {
    position: relative;
  }
  .title {
    text-align: left;
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    @media(min-width: 1280px) {
      display: none;
    }
  }
  .title-lg {
    text-align: left;
    margin-top: 10px;
    font-size: 18px;
    line-height: 21px;
    display: none;
    @media (min-width:1280px) {
      display: block;
    }
  }
  .thumb {
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
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
  }
    .image-not-found {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
}
</style>