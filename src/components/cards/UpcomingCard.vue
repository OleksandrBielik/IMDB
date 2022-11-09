<template>
  <router-link
    :to="`/movie/${item.id}`"
    class="article"
  >
    <article @click="addToRecentlyList(item)">
      <img
        class="backdrop-image"
        :src="backdropURL"
        :alt="name + 'backdrop image'"
      >
      <div class="description-drop" />
      <div class="card-info">
        <div class="thumb poster">
          <img
            class="poster-image"
            :src="imgURL"
            :alt="name + ' poster'"
          >
        </div>
        <div class="wrapper">
          <div class="description">
            <h2 class="title">
              {{ title }}
            </h2>
            <h2 class="title-lg">
              {{ titleLg }}
            </h2>
          </div>
        </div>
      </div>
      <div class="backdrop" />
    </article>
  </router-link>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { base } from '@/components/mixins/card/base';
import { recently } from '@/components/mixins/card/recently';

const { item } = props;
const { 
  computed: { 
    name, 
    imgURL 
  } 
} = base;

export default {
  name: 'UpcomingCard',
  mixins: [recently],
  props: { item },
  computed: {
    name,
    imgURL,
    backdropURL() {
      return `${process.env.VUE_APP_IMG_URL}` + this.item.backdrop_path
    },
    title() {
      let name = this.item.title || this.item.name
      if (name.length > 30) {
        return name.slice(0,30) + '...'
      } else {
        return name
      }
    },
    titleLg() {
      return this.item.title || this.item.name
    }
  },
}
</script>

<style lang="scss" scoped>
  .article {
    position: relative;
    display: block;
    width: 100%;
    color: $white;
  }
  .backdrop {
    position: absolute;
    bottom: -5%;
    left: 0;
    width: 110%;
    height: 150px;
    background: linear-gradient(to top, rgba(0, 0, 0, 100%) 70%, rgba(0, 0, 0, 50%) 100%);
    filter: blur(12px);
    z-index: 2;
    @media(min-width:1440px) {
      height: 300px;
    }
  }
  .backdrop-image {
    min-height: 100px;
    object-fit: cover;
  }
  .description-drop {
    height: 100px;
    @media(min-width:768px) {
      display: none;
    }
  }
  .card-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 15px 10px 15px;
    display: flex;
    z-index: 3;
    @media(min-width:768px) {
      padding: 0 55px 25px 35px;
    }
    @media(min-width:1440px) {
    }
    .poster {
      margin-right: 20px;
      margin-top: auto;
      @media(min-width:1440px) {
        margin-right: 40px;
      }
    }
    .poster-image {
      min-width: 90px;
      width: 90px;
      object-fit: cover;
      @media(min-width:768px) {
        width: 140px;
      }
      @media(min-width:1440px) {
        width: 200px;
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      @media(min-width:768px) {
        justify-content: flex-end;
      }
    }
    .title {
      font-size: 30px;
      @media(min-width:768px) {
        font-size: 50px;
      }
      @media(min-width:1440px) {
        display: none;
      }
    }
    .title-lg {
      display: none;
      @media(min-width:1440px) {
        font-size: 70px;
        display: block;
      }
    }
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
</style>