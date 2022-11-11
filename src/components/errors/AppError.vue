<template>
  <div>
    <svg><use href="../../assets/sprite.svg#icon-error" /></svg>
    <div class="wrapper">
      <h2 class="title">
        Error!
      </h2>
      <p>Something went wrong...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorComp',
}
</script>

<style scoped>
  svg {
    width: 70px;
    margin-right: 10px;
  }
</style>

<style lang="scss" scoped>
  svg {
    fill: $white;
  }
</style>
