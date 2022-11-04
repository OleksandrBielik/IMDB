<template>
  <router-link
    v-if="item.media_type === 'tv' && !item.card_type"
    :to="link"
    class="poster-card"
  >
    <article @click="addToRecentlyList(item)">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.name + 'image'"
        >
      </div>
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
  name: 'TvCard',
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