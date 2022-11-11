<template>
  <label
    :class="active"
    @click="onChange"
    @keydown.enter="onChange"
  >
    <input
      type="radio"
      name="rating"
      :value="value"
      :aria-label="`Rate ${value}`"
      class="visually-hidden"
      tabindex="-1"
    >
    <span class="checkbox-icon">
      <svg
        class="icon-star-border"
        width="26"
        height="26"
      >
        <use href="../../assets/sprite.svg#icon-star-border" />
      </svg>
      <svg
        class="icon-big-star"
        width="26"
        height="26"
      >
        <svg><use href="../../assets/sprite.svg#icon-big-star" /></svg>
      </svg></span>
  </label>
</template>

<script>
export default {
  name: 'RatingStar',
  props: {
    value: {
      type: Number,
      required: true
    },
    star: {
      type: Number,
      required: true
    }
  },
  computed: {
    active() {
      return {
        'active' : this.value <= this.star
      }
    },
  },
  methods: {
    onChange() {
      this.$emit('on-change', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  label {
    cursor: pointer;
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  span.checkbox-icon {
    display: inline-block;
    color: $light-blue-color;
    svg {
      fill: currentColor;
    }
    .icon-big-star {
      display: none;
    }
    .icon-star-border {
      display: inline-block;
    }
  }
  label:not(:last-child) {
    margin-right: 5px;
  }
  label.active > .checkbox-icon {
    color: $gold-color;
    .icon-big-star {
      display: inline-block;
    }
    .icon-star-border {
      display: none
    }
  }
</style>
