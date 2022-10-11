<template>
  <div class="page">
    <router-link to="###">Episode Guide</router-link>
    <h1>{{ items.title }}</h1>
    <p>Original title: Dahmer - Monster: The Jeffrey Dahmer Story</p>
    <p>
      TV Mini Series
      2022
      TV-MA
      8h 54m
    </p>
    <div class="video" />
    <div class="wrapper">
      <div class="videos" />
      <div class="photos" />
    </div>
    <div class="genres" />
    <p class="overview">
      Story of the Milwaukee Monster told from the perspective of the victims and police incompetence that allowed the Wisconsin native to go on a multiyear killing spree.
    </p>
    <div class="rating" />
  </div>
</template>

<script>
export default {
  name: 'ItemPage',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    items() {
      return this.$store.getters[`${this.path.slice(1).split('/')[0]}/getItems`]
    },
  },
  mounted() {
    switch(this.path) {
      case `/movie/${this.$route.params.id}`: this.$store.dispatch('movie/getMovie', { id: this.$route.params.id })
      break
      default: return
    }
  },

}
</script>

<style scoped>
  .page {
    color: #fff;
  }
</style>