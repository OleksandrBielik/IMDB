<template>
  <li class="card">
    <a
      href="#"
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
            <div class="rating">{{ rating }}</div>
            <div class="media-type">{{ mediaType }}</div>
          </div>
          <div class="title">{{ title }}</div>
        </div>
      </article>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ItemCard',
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
  methods: {
    addRecently(item) {
      item.card_type = 'TrendingCard'
      this.$store.dispatch('home/addRecently', { item })
    }
  }
}
</script>

<style lang="scss" scoped>
  a, article {
    display: block;
    height: 100%;
  }
  .wrapper {
    padding: 8px 5px;
    margin-bottom: 10px;
    .wrapper {
      padding: 0;
      display: flex;
      align-items: center;
    }
  }
  .card {
    margin: 15px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #1f1f1f;
    color: #fff;
    width: calc((100% - 4 * 15px) / 2);
    height: 310px;
    @media (min-width:480px) {
      width: calc((100% - 6 * 15px) / 3);
      height: 310px;
    }
    @media (min-width:768px) {
      width: calc((100% - 8 * 15px) / 4);
      height: 350px;
    }
    @media (min-width:1024px) {
      width: calc((100% - 10 * 15px) / 5);
      height: 380px;
    }
    @media (min-width:1280px) {
      width: calc((100% - 10 * 15px) / 5);
      height: 440px;
    }
  }
  .media-type {
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 1px 5px;
    margin-left: auto;
  }
  .star-icon {
    margin-right: 5px;
  }
  .thumb {
    img {
      object-fit: cover;
      display: block;
      height: 210px;
      @media (min-width:768px) {
        height: 255px;
      }
      @media (min-width:1024px) {
        height: 274px;
      }
      @media (min-width:1280px) {
        height: 340px;
      }
    }
  }
</style>
