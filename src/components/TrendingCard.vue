<template>
  <div class="card">
    <a href="#">
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
  </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  article {
    width: 124px;
    height: 300px;
    background-color: #121212;
    @media (min-width:768px) {
      width: 159px;
      height: 350px;
    }
    @media (min-width:1024px) {
      width: 185px;
      height: 380px;
    }
  }
  .card {
    margin: 8px;
    border-radius: 5px;
    overflow: hidden;
    @media (min-width:1024px) {
      margin: 12px;
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
      width: 124px;
      height: 184px;
      @media (min-width:768px) {
        width: 159px;
        height: 236px;
      }
      @media (min-width:1024px) {
        width: 185px;
        height: 274px;
      }
    }
  }
</style>
