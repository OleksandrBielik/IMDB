<template>
  <router-link
    class="poster-card"
    :to="link"
  >
    <div
      class="thumb"
      @click="scrollUp"
    >
      <img
        :src="imgURL"
        :alt="name + ' image'"
      >
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

export default {
  name: 'ImageCard',
  mixins: [props, base, id],
  methods: {
    scrollUp,
  }
}
</script>
