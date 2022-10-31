<template>
  <article
    class="watchlist-card"
    @click="onSelect"
  >
    <div
      class="select-backdrop"
      :class="{selected: selected}"
    >
      <span>SELECTED</span>
    </div>
    <div class="thumb">
      <img
        :src="imgURL"
        :alt="item.name + 'image'"
      >
    </div>
    <div class="description">
      <h2>{{ title }}</h2>
    </div>
  </article>
</template>

<script>
import { imgURL, title } from '@/components/mixins/card';

export default {
  name: 'WatchlistCard',
  mixins: [imgURL, title],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    onSelect() {
      this.selected = !this.selected
      if (this.selected === false) {
        this.$emit('on-select', { item: this.item, method: 'remove' })
      } else {
        this.$emit('on-select', { item: this.item, method: 'push' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100px;
    object-fit: cover;
  }
  .thumb {
    margin-bottom: 5px;
  }
  .watchlist-card {
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
    max-width: 100px;
    height: 200px;
    font-size: 14px;
    line-height: 18px;
    position: relative;
  }
  .description {
    text-align: left;
    padding: 0 2px;
  }
  .select-backdrop {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: $arrow-bg-color;
    span {
      color: $white;
      font-weight: 800;
    }
  }
  .selected {
    display: flex;
  }
</style>