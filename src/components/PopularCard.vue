<template>
  <a
    href="#"
    @click.prevent="addRecently(item)"
  >
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
  },
  methods: {
    addRecently(item) {
      item.card_type = 'PopularCard'
      this.$store.dispatch('home/addRecently', { item })
    }
  }
}
</script>

<style lang="scss" scoped>
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