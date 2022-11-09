<template>
  <router-link
    class="video-card"
    :to="link"
  >
    <div
      class="card-wrapper"
      @click="scrollUp"
    >
      <img
        class="video-media"
        :src="BgVideoURL"
        :alt="name + ' image'"
      >
      <div class="overlay-button">
        <button
          type="button"
          class="play"
          aria-label="Play video"
        >
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 68 48"
            width="100%"
          ><path
            class="play-fragment"
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            fill="#f00"
          /><path
            class="play-inner-fragment"
            d="M 45,24 27,14 27,34"
            fill="#fff"
          /></svg>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { base } from '@/components/mixins/card/base';
import { id } from '@/components/mixins/card/id';
import { methods } from '@/components/mixins/common/methods';

const { methods: {
  scrollUp,
} } = methods;

const { 
  computed: { 
    link, 
    name,
    pathName,
  } 
} = base;

export default {
  name: 'VideoCard',
  mixins: [props, id],
  computed: {
    link,
    name,
    pathName,
    BgVideoURL() {
      try {
        return `${process.env.VUE_APP_BACKVIDEOIMG_URL}${this.item.key}/maxresdefault.jpg`
      } catch (error) {
        return ''
      }
    },
  },
  methods: {
    scrollUp,
  }
}
</script>

<style lang="scss" scoped>
  .video-card {
    background-color: $black;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
  }
  .card-wrapper {
    position: relative;
    height: 129.38px;
    @media(min-width:1024px) {
      height: 168.75px;
    }
  }
  .video-media {
    object-fit: cover;
    width: 230px;
    border: none;
    @media(min-width:1024px) {
      width: 300px;
    }
  }
  .overlay-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .play {
    cursor: pointer;
    background-color: transparent;
    width: 50px;
    @media(min-width:400px) {
      width: 80px;
    }
    .play-fragment {
      fill: $main-bg-color;
      fill-opacity: 0.8;
    }
    .play-fragment:hover {
      fill: #FF0000;
      fill-opacity: 1;
    }
    .play-inner-fragment {
      fill: $white;
    }
  }
  .video-card:hover .play-fragment, .video-card:focus .play-fragment {
    fill: #FF0000;
    fill-opacity: 1;
  }
</style>
