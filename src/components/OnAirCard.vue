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
    </article>
  </a>
</template>

<script>
export default {
  name: 'OnAirCard',
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
  },
  methods: {
    addRecently(item) {
      item.card_type = 'OnAirCard'
      this.$store.dispatch('home/addRecently', { item })
    }
  }
}
</script>

<style lang="scss" scoped>
.thumb {
  img {
    object-fit: cover;
    display: block;
    width: 85px;
    height: 144px;
    @media (min-width:768px) {
      width: 110px;
      height: 185px;
    }
    @media (min-width:1440px) {
      width: 132px;
      height: 222px;
    }
  }
}
.name {
  text-align: center;
}
</style>