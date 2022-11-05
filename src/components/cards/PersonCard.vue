<template>
  <router-link
    :to="link"
    class="person-card"
  >
    <article @click="addToRecentlyList(item)">
      <div class="thumb">
        <img
          v-if="imgURL"
          :src="imgURL"
          :alt="name + ' photo'"
        >
        <img
          v-else
          class="image-not-found"
          src="../../assets/image-not-found-icon.svg"
          alt="image not found"
        >
      </div>
      <h2 class="name">
        {{ name }}
      </h2>
    </article>
  </router-link>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { computed } from '@/components/mixins/card/computed';
import { methods } from '@/components/mixins/card/methods';

const { computed: {
    link,
    imgURL,
    name,
    recentlyList,
    statusRecentlyList,
  }
} = computed;

const { methods: {
    addToRecentlyList,
  }
} = methods;

export default {
  name: 'PersonCard',
  mixins: [props],
  computed: {
    link,
    imgURL,
    name,
    recentlyList,
    statusRecentlyList,
  },
  methods: {
    addToRecentlyList,
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
    img.image-not-found {
      object-fit: contain;
      transform: scale(0.6);
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