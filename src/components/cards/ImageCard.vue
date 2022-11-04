<template>
  <router-link
    class="poster-card"
    :to="link"
  >
    <article>
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="name + 'image'"
        >
      </div>
    </article>
  </router-link>
</template>

<script>
import { props } from '@/components/mixins/card/props';
import { computed } from '@/components/mixins/card/computed';

const { computed: {
    link,
    imgURL,
    name,
  }
} = computed;

export default {
  name: 'ImageCard',
  mixins: [props],
  computed: {
    link,
    imgURL,
    name,
  }
}
</script>
