<template>
  <a
    href="#"
    class="person-card"
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