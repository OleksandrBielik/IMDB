<template>
  <router-link
    :to="link"
    class="person-card"
    :aria-label="`${name} card`"
  >
    <article @click="addToRecentlyList(item)">
      <div class="thumb">
        <img
          v-if="imgURL"
          :src="imgURL"
          :alt="name + ' photo'"
        >
        <div
          v-else
          class="image-not-found"
        >
          Image not found
        </div>
      </div>
      <h2 class="name">
        {{ name }}
      </h2>
    </article>
  </router-link>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { base } from '@/components/mixins/card/base';
import { recently } from '@/components/mixins/card/recently';

const { 
  computed: { 
    name, 
    imgURL, 
    link,
  } 
} = base;

export default {
  name: 'PersonCard',
  mixins: [props, recently],
  computed: { 
    name, 
    imgURL, 
    link,
  } 
}
</script>

<style lang="scss" scoped>
.person-card {
  margin: 8px;
  border-radius: 5px;
  overflow: hidden;
  @media (min-width:1024px) {
    margin: 12px;
  }
  article {
    padding: 10px 0;
  }
  .thumb {
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      object-fit: cover;
      display: block;
      width: 124px;
      height: 124px;
      @media (min-width:768px) {
        width: 159px;
        height: 159px;
      }
      @media (min-width:1440px) {
        width: 185px;
        height: 185px;
      }
    }
  .image-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    @media (min-width:768px) {
      width: 159px;
      height: 159px;
    }
    @media (min-width:1440px) {
      width: 185px;
      height: 185px;
    }
  }
  }
  .name {
    max-width: 124px;
    text-align: center;
    white-space: normal;
    @media (min-width:768px) {
      max-width: 159px;
    }
    @media (min-width:1440px) {
      max-width: 185px;
    }
  }
}
</style>