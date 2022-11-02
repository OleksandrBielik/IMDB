<template>
  <label :class="active">
    <input
      type="radio"
      name="rating"
      :value="value"
      :aria-label="`Rate ${value}`"
      tabindex="-1"
      @click="onChange"
      @keydown.enter="onChange"
    >
    <span class="checkbox-icon" />
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
    background: url('../../assets/star-border.svg')no-repeat;
    width: 24px;
    height: 24px;
    background-position: center;
  }
  label:not(:last-child) {
    margin-right: 5px;
  }
  label.active > .checkbox-icon{
    background: url('../../assets/star-icon.svg')no-repeat;
  }
</style>
