<template>
  <router-link
    :to="link"
    class="card"
    @click.prevent="addRecently(item)"
  >
    <article>
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.title + 'poster image'"
        >
      </div>
      <div class="wrapper">
        <div class="wrapper">
          <img
            class="star-icon"
            src="../assets/star-icon.svg"
            alt="rating icon"
            width="15"
          >
          <div class="rating">
            {{ rating }}
          </div>
          <div class="media-type">
            {{ item.media_type }}
          </div>
        </div>
        <div class="title">
          {{ title }}
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'TrendingCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.item.poster_path}`
    },
    rating() {
      return String(this.item.vote_average).slice(0,3)
    },
    title() {
      let name = this.item.title || this.item.name
      if (name.length > 30) {
        return name.slice(0,30) + '...'
      } else {
        return name
      }
    },
    link() {
      switch(this.item.media_type) {
        case 'movie': return `/movie/${this.item.id}`
        case 'tv': return `/tv/${this.item.id}`
        case 'person': return `/person/${this.item.id}`
        default: return undefined
      }
    }
  },
  methods: {
    addRecently(item) {
      item.card_type = 'TrendingCard'
      this.$store.dispatch('home/addRecently', { item })
    }
  }
}
</script>
