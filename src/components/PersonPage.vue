<template>
  <main class="page">
    <h1>{{ title }}</h1>
    <div class="wrapper">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="title + ' image'"
        >
      </div>
      <ul class="info">
        <li>
          <span>Birthday:</span> {{ items.birthday }}
        </li>
        <li>
          <span>Place of birth:</span> {{ items.place_of_birth }}
        </li>
        <li>
          <span>Also known as:</span> {{ known }}
        </li>
        <li>
          <span>Rating:</span> {{ rating }}
        </li>
        <li>
          <span>Biography:</span> {{ items.biography }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'PersonPage',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    items() {
      return this.$store.getters[`${this.path}/getData`]
    },
    images() {
      return this.$store.getters[`${this.path}/getImages`]
    },
    title() {
      return this.items.name
    },
    known() {
      try {
        return this.items.also_known_as.join()
      } catch (error) {
        return ''
      }
      
    },
    rating() {
      return Math.round(this.items.popularity)
    },
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.items.profile_path}`
    },
  },
  mounted() {
    this.$store.dispatch('person/fetchPerson', { id: this.$route.params.id })
  },
  methods: {
    scrollUp() {
      document.querySelector('header').scrollIntoView({ block: 'center', behavior: 'smooth' })
    },
  }
}
</script>

<style lang="scss" scoped>
  .page {
    color: #fff;
    margin-top: 48px;
    line-height: 24px;
    @media (min-width:400px) {
      margin-top: 50.69px;
    }
  }
  h1 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 20px;
    padding-top: 20px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width:768px) {
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 50px;
    }
  }
  .thumb {
    margin-bottom: 20px;
    @media(min-width:768px) {
      margin: 0 15px 0 0;
    }
  }
  img {
    object-fit: cover;
    height: 300px;
    min-width: 200px;
    border-radius: 5px;
  }
  span {
    font-weight: 800;
  }
  li {
    border-bottom: 1px solid $white;
  }
  li:not(:first-child) {
    padding: 10px 0;
  }
</style>