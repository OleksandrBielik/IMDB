<template>
  <div class="card">
    <a href="#">
      <article>
        <div class="thumb">
          <img
            :src="imgURL"
            :alt="item.name + 'image'"
          >
        </div>
        <p class="name">{{ item.name }}</p>
      </article>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PopularCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.item.profile_path}`
    },
  }
}
</script>

<style lang="scss" scoped>
  article {
  }
  .card {
    margin: 8px;
    @media (min-width:1024px) {
      margin: 12px;
    }
  }
  .thumb {
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      object-fit: cover;
      display: block;
      width: 124px;
      height: 124px;
      @media (min-width:768px) {
        width: 159px;
        height: 159px;
      }
      @media (min-width:1440px) {
        width: 185px;
        height: 185px;
      }
    }
  }
  .name {
    text-align: center;
  }
</style>