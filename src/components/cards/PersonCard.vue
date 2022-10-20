<template>
  <router-link
    v-if="item.media_type === 'person' && !item.card_type"
    :to="link"
    class="person-card"
  >
    <article @click="addRecently(item)">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.name + 'image'"
        >
      </div>
      <p class="name">
        {{ item.name }}
      </p>
    </article>
  </router-link>
</template>

<script>
import { card } from '@/components/mixins/card';

export default {
  name: 'PersonCard',
  mixins: [card]
}
</script>