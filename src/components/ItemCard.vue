<template>
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
          <div class="media-type">{{ item.media_type }}</div>
        </div>
        <div class="title">{{ title }}</div>
      </div>
    </article>
  </a>
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
      return `${process.env.VUE_APP_IMG_URL}${this.item.poster_path}`
    },
    rating() {
      return String(this.item.vote_average).slice(0,3)
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
  article {
    width: 137px;
    height: 310px;
    background-color: #1f1f1f;
    color: #fff;
    @media (min-width:768px) {
      width: 172.5px;
      height: 350px;
    }
    @media (min-width:1024px) {
      width: 185px;
      height: 380px;
    }
    @media (min-width:1200px) {
      width: 200px;
      height: 380px;
    }
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
      width: 137px;
      height: 210px;
      @media (min-width:768px) {
        width: 172.5px;
        height: 255px;
      }
      @media (min-width:1024px) {
        width: 185px;
        height: 274px;
      }
      @media (min-width:1200px) {
        width: 200px;
        height: 285px;
      }
    }
  }
</style>
