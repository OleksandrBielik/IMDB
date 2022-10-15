<template>
  <a
    href="#"
    class="card"
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
          <div class="rating">{{ rating }}</div>
          <div class="media-type">{{ mediaType }}</div>
        </div>
        <div class="title">{{ title }}</div>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  name: 'RecentlyCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.item.poster_path || this.item.profile_path}`
    },
    rating() {
      if (this.item.vote_average) {
        return String(this.item.vote_average).slice(0,3)
      } else if (this.item.popularity) {
        return Math.round(this.item.popularity)
      } else {
        return undefined
      }
    },
    mediaType() {
      if (this.item.media_type) {
        return this.item.media_type
      } else if (this.item.profile_path) {
        return 'actor'
      } else {
        return 'tv'
      }
    },
    title() {
      let name = this.item.title || this.item.name
      if (name.length > 25) {
        return name.slice(0,25) + '...'
      } else {
        return name
      }
    }
  },
}
</script>