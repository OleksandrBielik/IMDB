<template>
  <article>
    <img
      class="backdrop-image"
      :src="backdropURL"
      :alt="item.title || item.name + 'backdrop image'"
    >
    <div class="description-drop" />
    <div class="card-info">
      <div class="thumb poster">
        <img
          class="poster-image"
          :src="imgURL"
          :alt="item.title || item.name + 'image'"
        >
      </div>
      <div class="wrapper">
        <div class="thumb play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g data-name="play circle">
              <path
                d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"
                style="fill:currentColor"
              />
              <path
                d="M17.49 11.13c-9.58-5.32-9.31-5.4-10-5S7 6.41 7 17a1 1 0 0 0 1 1c.37 0-.29.3 9.49-5.13a1 1 0 0 0 0-1.74zM9 15.3V8.7l5.94 3.3z"
                style="fill:currentColor"
              />
            </g>
          </svg>
        </div>
        <div class="description">
          <div class="title">
            {{ title }}
          </div>
          <div class="title-lg">
            {{ titleLg }}
          </div>
          <div class="overview">
            {{ overview }}
          </div>
          <div class="overview-lg">
            {{ overviewLg }}
          </div>
        </div>
      </div>
    </div>
    <div class="backdrop" />
  </article>
</template>

<script>

export default {
  name: 'UpcomingCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    backdropURL() {
      return 'https://image.tmdb.org/t/p/original' + this.item.backdrop_path
    },
    imgURL() {
      return `${process.env.VUE_APP_IMG_URL}${this.item.poster_path}`
    },
    overview() {
      if (this.item.overview.length > 50) {
        return this.item.overview.slice(0,50) + '...'
      } else {
        return this.item.overview
      }
    },
    title() {
      let name = this.item.title || this.item.name
      if (name.length > 20) {
        return name.slice(0,20) + '...'
      } else {
        return name
      }
    },
    overviewLg() {
      if (this.item.overview.length > 65) {
        return this.item.overview.slice(0,65) + '...'
      } else {
        return this.item.overview
      }
    },
    titleLg() {
      let name = this.item.title || this.item.name
      if (name.length > 23) {
        return name.slice(0,23) + '...'
      } else {
        return name
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  article {
    position: relative;
    display: block;
    width: 100%;
    color: $white;
  }
  .backdrop {
    position: absolute;
    bottom: -5%;
    left: 0;
    width: 110%;
    height: 200px;
    background: linear-gradient(to top, rgba(0, 0, 0, 100%) 70%, rgba(0, 0, 0, 50%) 100%);
    filter: blur(12px);
    z-index: 2;
    @media(min-width:1440px) {
      height: 300px;
    }
  }
  .backdrop-image {
    min-height: 190px;
    object-fit: cover;
  }
  .description-drop {
    height: 180px;
    @media(min-width:768px) {
      display: none;
    }
  }
  .card-info {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 185px;
    width: 100%;
    padding: 0 15px 0px 0px;
    display: flex;
    z-index: 3;
    @media(min-width:768px) {
      padding: 0 55px 40px 10px;
    }
    @media(min-width:1440px) {
      padding: 0 55px 40px 15px;
      height: 260px;
    }
    .poster {
      min-width: 90px;
      height: 133px;
      margin-right: 20px;
      margin-top: auto;
      @media(min-width:768px) {
        min-width: 132px;
        height: 195px;
      }
      @media(min-width:1440px) {
        min-width: 165px;
        height: 245px;
        margin-right: 40px;
      }
    }
    .poster-image {
      min-width: 90px;
      height: 133px;
      object-fit: cover;
      @media(min-width:768px) {
        min-width: 100px;
        height: 160px;
      }
      @media(min-width:1440px) {
        min-width: 165px;
        height: 245px;
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: end;
    }
    .title {
      font-size: 30px;
      @media(min-width:768px) {
        font-size: 50px;
      }
      @media(min-width:1440px) {
        display: none;
      }
    }
    .title-lg {
      display: none;
      @media(min-width:1440px) {
        font-size: 70px;
        display: block;
      }
    }
    .overview {
      font-size: 15px;
      color: gray;
      @media(min-width:768px) {
        font-size: 20px;
      }
      @media(min-width:1440px) {
        display: none;
      }
    }
    .overview-lg {
      display: none;
      @media(min-width:1440px) {
        color: gray;
        font-size: 25px;
        display: block;
      }
    }
  }
  .play {
    color: #fff;
    min-width: 50px;
    width: 50px;
    height: 50px;
    margin-top: auto;
    margin-right: 20px;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    &:hover, &:focus {
      color: #F5C518;
    }
    @media(min-width:768px) {
        min-width: 80px;
        height: 80px;
    }
    @media(min-width:1440px) {
        min-width: 120px;
        height: 120px;
    }
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
</style>