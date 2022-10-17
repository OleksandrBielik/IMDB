<template>
  <div class="page">
    <!-- <router-link to="###">
      Episode Guide
    </router-link> -->
    <div class="container flex">
      <div class="wrapper-title">
        <h1>{{ items.title }}</h1>
        <p class="additional">
          Original title: {{ items.original_title }}
        </p>
        <p class="additional">
          {{ year }} |
          {{ runtime }}
        </p>
      </div>
      <div class="wrapper-rating">
        <div class="imdb-rating">
          <span>IMDb RATING</span>
          <span>{{ String(items.vote_average).slice(0,3) }}/10</span>
        </div>
        <div class="your-rating">
          <span>YOUR RATING</span>
          <span>RATE</span>
        </div>
      </div>
    </div>
    <div class="container p-0">
      <div class="wrapper-video">
        <div class="poster">
          <img
            class="poster-image"
            :src="imgURL"
            :alt="items.title || items.name + 'image'"
          >
        </div>
        <div class="video">
          <iframe
            :src="trailerURL"
            frameborder="0"
          />
        </div>
      </div>
      <div class="wrapper">
        <div class="videos">
          {{ videos.length + ' videos' }}
        </div>
        <div class="images">
          {{ images.length + ' images' }}
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="genres">
        <li
          v-for="genre in items.genres"
          :key="genre.id"
        >
          {{ genre.name }}
        </li>
      </ul>
      <div class="wrapper-overview">
        <p class="overview">
          {{ items.overview }}
        </p>
        <ul>
          <li>Status: {{ items.status }}</li>
          <li>Production companies: {{ companies }}</li>
          <li>Production countries: {{ countries }}</li>
        </ul>
        <div class="rating">
          {{ String(items.vote_average).slice(0,3) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemPage',
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
    videos() {
      try {
        return this.items.videos.results
      } catch (error) {
        return ''
      }
    },
    images() {
      try {
        return this.items.images.posters
      } catch (error) {
        return ''
      }
    },
    runtime() {
      const hours = Math.round(this.items.runtime / 60) + 'h'
      const minutes = this.items.runtime % 60 + 'm'
      return `${hours} ${minutes}`
    },
    year() {
      const time = new Date(this.items.release_date)
      return time.getUTCFullYear()
    },
    companies() {
      try {
        return this.items.production_companies.map(item=>item.name).join(', ')
      } catch (error) {
        return ''
      }
    },
    countries() {
      try {
        return this.items.production_countries.map(item=>item.name).join(', ')
      } catch (error) {
        return ''
      }
    },
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.items.poster_path}`
    },
    trailerURL() {
      try {
        const key = this.videos.find(item => item.type === 'Trailer').key
        console.log(key)
        return `https://www.youtube.com/embed/${key}`
      } catch (error) {
        return ''
      }
    }
  },
  mounted() {
    switch(this.path) {
      case 'movie': this.$store.dispatch('movie/getMovie', { id: this.$route.params.id })
      break
      default: return
    }
  },

}
</script>

<style lang="scss" scoped>
  .page {
    color: #fff;
    margin-top: 20px;
  }
  h1 {
    font-size: 32px;
    line-height: 48px;
  }
  .additional {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 15px;
  }
  .overview {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  .genres {
    font-size: 12px;
    margin-bottom: 15px;
    li {
      display: inline-block;
      border: 1px solid #fff;
      border-radius: 30px;
      padding: 5px 10px;
    }
    li:not(:last-child) {
      margin-right: 10px;
    }
  }
  .poster {
    display: none;
    margin-right: 5px;
    @media(min-width:600px) {
      display: block;
    }
    @media(min-width:768px) {
      width: 30%;
    }
    img {
      object-fit: cover;
      @media(min-width:600px) {
        height: 100%;
      }
      @media(min-width:768px) {
        width: 100%;
      }
    }
  }
  .wrapper-video {
    display: flex;
    margin: 0 auto 5px auto;
    @media(min-width:600px) {
      height: 230px;
    }
    @media(min-width:768px) {
      height: 292px;
    }
    @media(min-width:975px) {
      margin: 0;
      width: 100%;
      height: 100%;
    }
  }
  .video {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    @media(min-width:600px) {
      padding: 0;
    }
  }
  .wrapper {
    display: flex;
    margin-bottom: 20px;
    @media(min-width:600px) {
      margin: 0 auto 20px auto;
    }
    @media(min-width:975px) {
      flex-direction: column;
      padding: 0;
      margin: 0 0 0 5px;
      width: 15%;
    }
    .videos {
      margin-right: 5px;
      @media(min-width:975px) {
        margin: 0 0 5px 0;
      }
    }
    .videos, .images {
      width: 100%;
      padding: 15px 20px;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      text-align: center;
      background-color: $element-color;
      font-size: 12px;
      text-transform: uppercase;
      @media(min-width:975px) {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    @media(min-width:600px) {
      position: relative;
    }
  }
  .container {
    @media(min-width:600px) {
      max-width: 600px;
    }
    @media(min-width:768px) {
      max-width: 768px;
    }
    @media(min-width:975px) {
      max-width: 975px;
    }
    @media(min-width:1280px) {
      max-width: 1280px;
    }
  }
  .p-0 {
    padding: 0;
    @media(min-width:600px) {
      padding: 0 15px;
    }
    @media(min-width:975px) {
      display: flex;
      height: 338px;
      margin-bottom: 20px;
    }
    @media(min-width:1280px) {
      display: flex;
      height: 420px;
      margin-bottom: 20px;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .imdb-rating, .your-rating {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper-rating {
    display: flex;
  }
</style>