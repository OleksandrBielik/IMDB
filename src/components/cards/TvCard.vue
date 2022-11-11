<template>
  <router-link
    :to="link"
    class="poster-card"
    :aria-label="`${name} card`"
  >
    <div
      class="thumb"
      @click="addToRecentlyList(item)"
    >
      <img
        :src="imgURL"
        :alt="name + ' poster'"
      >
    </div>
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
  name: 'TvCard',
  mixins: [props, recently],
  computed: { 
    name, 
    imgURL,
    link,
  }
}
</script>