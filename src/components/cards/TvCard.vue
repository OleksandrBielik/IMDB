<template>
  <router-link
    :to="link"
    class="poster-card"
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