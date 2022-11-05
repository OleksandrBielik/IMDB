<template>
  <div
    v-if="loading"
    class="spinner"
  >
    <i />
  </div>
  <article
    v-else
    class="page"
  >
    <div class="flex">
      <div class="wrapper-title">
        <h1>{{ title }}</h1>
        <div class="additional">
          Original title: {{ originalTitle }}
        </div>
        <div class="additional">
          <span>{{ year }}</span> | <span>{{ runtime }}</span> <span v-if="$route.name === 'tv'">(episode)</span>
        </div>
      </div>
      <ul class="wrapper-rating desc">
        <li class="imdb-rating">
          <span>IMDb RATING</span>
          <span class="imdb-rate"><img
            class="star-icon"
            src="../../assets/star-icon.svg"
            alt="rating icon"
            width="25"
          >{{ Math.round(items.vote_average) }}/10</span>
        </li>
        <li class="your-rating">
          <span>YOUR RATING</span>
          <span
            v-if="rate"
            class="imdb-rate"
            @click="onClick"
          ><img
            class="star-icon"
            src="../../assets/star-icon.svg"
            alt="rating icon"
            width="25"
          >{{ rate }}/10</span>
          <span
            v-if="user && !rate"
            class="rate"
            @click="onClick"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          ><path
            fill="none"
            d="M0 0h24v24H0V0z"
          /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg> Rate</span>
          <router-link
            v-if="!user"
            to="/login"
            class="rate"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
            Rate
          </router-link>
        </li>
      </ul>
    </div>
    <div class="p-0">
      <div class="wrapper-video">
        <div class="poster">
          <img
            class="poster-image"
            :src="imgURL"
            :alt="title + ' poster'"
          >
        </div>
        <div class="video">
          <picture v-if="!iframe">
            <source
              :srcset="BgVideoWebpURL"
              type="image/webp"
            >
            <img
              class="video-media"
              :src="BgVideoURL"
              :alt="title + ' video image'"
            >
          </picture>
          <div
            class="overlay-button"
            @click="onPlay"
          >
            <button
              v-if="!iframe"
              type="button"
              class="play"
            >
              <svg
                height="100%"
                version="1.1"
                viewBox="0 0 68 48"
                width="100%"
              ><path
                class="play-fragment"
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"
              /><path
                class="play-inner-fragment"
                d="M 45,24 27,14 27,34"
                fill="#fff"
              /></svg>
            </button>
          </div>
          <iframe
            v-if="videos.length && iframe"
            :src="trailerURL"
            frameborder="0"
            allow="autoplay"
          />
          <p
            v-else
            class="not-found"
          >
            Video not found
          </p>
        </div>
      </div>
      <ul class="wrapper">
        <li class="videos">
          <button
            type="button"
            @click="onNavigate('#videos')"
          >
            <svg
              id="iconContext-video-library"
              xmlns="http://www.w3.org/2000/svg"
              class="ipc-icon ipc-icon--video-library ipc-icon--inline sc-a93004d6-0 gVqJqU"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z" /></svg>
            <span>{{ videos.length + ' videos' }}</span>
          </button>
        </li>
        <li class="images">
          <button
            type="button"
            @click="onNavigate('#images')"
          >
            <svg
              id="iconContext-collections"
              xmlns="http://www.w3.org/2000/svg"
              class="ipc-icon ipc-icon--collections ipc-icon--inline sc-a93004d6-0 gVqJqU"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-10.6-3.47l1.63 2.18 2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7c.26.33.03.81-.39.81H9a.5.5 0 0 1-.4-.8l2-2.67c.2-.26.6-.26.8 0zM2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z" /></svg>
            <span>{{ images.length + ' images' }}</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="flex-wrapper">
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
        <ul class="details">
          <li><span>Status:</span> {{ items.status }}</li>
          <li><span>Production companies:</span> {{ companies }}</li>
          <li><span>Production countries:</span> {{ countries }}</li>
          <template v-if="$route.name === 'tv'">
            <li><span>Seasons:</span> {{ items.number_of_seasons }}</li>
            <li><span>Episodes:</span> {{ items.number_of_episodes }}</li>
          </template>
        </ul>
        <ul class="wrapper-rating mob">
          <li class="imdb-rating">
            <span>IMDb RATING</span>
            <span class="imdb-rate"><img
              class="star-icon"
              src="../../assets/star-icon.svg"
              alt="rating icon"
              width="25"
            >{{ Math.round(items.vote_average) }}/10</span>
          </li>
          <li class="your-rating">
            <span>YOUR RATING</span>
            <span
              v-if="rate"
              class="imdb-rate"
              @click="onClick"
            ><img
              class="star-icon"
              src="../../assets/star-icon.svg"
              alt="rating icon"
              width="25"
            >{{ rate }}/10</span>
            <span
              v-if="user && !rate"
              class="rate"
              @click="onClick"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg> Rate</span>
            <router-link
              v-if="!user"
              to="/login"
              class="rate"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              ><path
                fill="none"
                d="M0 0h24v24H0V0z"
              /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
              Rate
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <rate-modal
      v-if="modal"
      :title="title"
      @on-close="onClose"
    />
  </article>
</template>

<script>
import RateModal from '../modals/RateModal.vue';

export default {
  name: 'ItemPage',
  components: { 
    RateModal,
  },
  data() {
    return {
      modal: false,
      iframe: false,
      loading: true,
    }
  },
  computed: {
    items() {
      return this.$store.getters[`${this.$route.name}/getItem`]
    },
    videos() {
      return this.$store.getters[`${this.$route.name}/getVideos`]
    },
    images() {
      return this.$store.getters[`${this.$route.name}/getImages`]
    },
    user() {
      return this.$store.getters['auth/getUserLogin']
    },
    rated() {
      return this.$store.getters['rated/getItems']
    },
    title() {
      return this.items.title || this.items.name
    },
    originalTitle() {
      return this.items.original_title || this.items.original_name
    },
    runtime() {
      const hours = Math.round((this.items.runtime || this.items.episode_run_time) / 60) + 'h'
      const minutes = (this.items.runtime || this.items.episode_run_time) % 60 + 'm'
      return `${hours} ${minutes}`
    },
    year() {
      const time = new Date(this.items.release_date || this.items.first_air_date)
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
        return `${process.env.VUE_APP_VIDEO_URL}${key}?rel=0&showinfo=0&autoplay=1`
      } catch (error) {
        return ''
      }
    },
    BgVideoURL() {
      try {
        const key = this.videos.find(item => item.type === 'Trailer').key
        return `${process.env.VUE_APP_BACKVIDEOIMG_URL}${key}/maxresdefault.jpg`
      } catch (error) {
        return ''
      }
    },
    BgVideoWebpURL() {
      try {
        const key = this.videos.find(item => item.type === 'Trailer').key
        return `${process.env.VUE_APP_BACKVIDEOIMG_WEBP_URL}${key}/maxresdefault.webp`
      } catch (error) {
        return ''
      }
    },
    rate() {
      const index = this.rated.findIndex(item=> item.id === this.$route.params.id)
      if (index >= 0) {
        return this.rated[index].rate
      } else {
        return undefined
      }
    },
  },
  mounted() {
    switch(this.$route.name) {
      case 'movie': {
        return this.$store.dispatch('movie/fetchMovie', { id: this.$route.params.id })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
      case 'tv': {
        return this.$store.dispatch('tv/fetchTv', { id: this.$route.params.id })
        .then(res => this.loading = false)
        .catch((error) => {
          if (error.response.status === 404) {
            this.loading = false
            this.$emit('on-error', true)
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
      }
    }
  },
  methods: {
    onClose(modal) {
      this.modal = modal
    },
    onClick() {
      this.modal = true
    },
    onPlay() {
      this.iframe = !this.iframe
    },
    onNavigate(selector) {
      document.querySelector(selector).scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    color: $white;
    padding-top: 50px;
    margin-bottom: 80px;
    @media (min-width:400px) {
      padding-top: 50.69px;
    }
  }
  h1 {
    font-size: 32px;
    line-height: 48px;
  }
  .additional {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 5px;
    color: $secondary-gray;
  }
  .genres {
    font-size: 12px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    li {
      display: inline-block;
      border: 1px solid $white;
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
    height: 0;
    padding-bottom: 56.25%;
    background-color: $black;
    @media(min-width:600px) {
      padding: 0;
      height: 100%;
    }
  }
  .video-media {
    @media(min-width:600px) {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .overlay-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .play {
    cursor: pointer;
    background-color: transparent;
    width: 50px;
    @media(min-width:400px) {
      width: 80px;
    }
    .play-fragment {
      fill: $main-bg-color;
      fill-opacity: 0.8;
    }
    .play-fragment:hover {
      fill: #FF0000;
      fill-opacity: 1;
    }
    .play-inner-fragment {
      fill: $white;
    }
  }
  .video:hover .play-fragment, .video:focus .play-fragment {
    fill: #FF0000;
    fill-opacity: 1;
  }
  .play:hover .play-fragment, .play:focus .play-fragment{
    fill: #FF0000;
    fill-opacity: 1;
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
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      background-color: $element-color;
      color: $gray;
      @media(min-width:975px) {
        height: 100%;
        border-bottom-left-radius: 0;
        border-top-right-radius: 3px;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 20px;
        width: 100%;
        height: 100%;
        background-color: inherit;
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        text-align: center;
        color: inherit;
        cursor: pointer;
        @media(min-width:975px) {
          flex-direction: column;
        }
      }
      button:hover, button:focus {
        background-color: $arrow-bg-color;
        color: $white;
      }
      span {
        display: flex;
      }
      svg {
        margin-right: 5px;
        width: 24px;
        @media(min-width:975px) {
          margin: 0 0 10px 0;
          width: 35px;
        }
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
    margin: 20px 0 40px 0;
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
    padding-top: 20px;
  }
  .imdb-rating, .your-rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: $secondary-gray;
  }
  .imdb-rating {
    margin-right: 20px;
  }
  .imdb-rate, .rate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    font-size: 24px;
    height: 35px;
  }
  .rate {
    color: $light-blue-color;
    cursor: pointer;
  }
  .imdb-rate {
    color: $white;
  }
  .wrapper-rating {
    display: flex;
  }
  .overview {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    @media(min-width:1280px) {
      width: 50%;
      margin-right: 50px;
      margin-bottom: 0;
    }
  }
  .wrapper-overview {
    margin-bottom: 40px;
    @media(min-width:1280px) {
      display: flex;
      justify-content: space-between;
    }
  }
  .details {
    margin-bottom: 20px;
    li {
      padding-bottom: 10px;
      border-bottom: 1px solid $white;
      line-height: 24px;
    }
    li:not(:first-child) {
      padding-top: 10px;
    }
    span {
      font-weight: 800;
      font-size: 18px;
    }
  }
  .star-icon {
    margin-right: 5px;
  }
  .mob {
    @media(min-width:768px) {
      display: none;
    }
  }
  .desc {
    display: none;
    @media(min-width:768px) {
      display: flex;
    }
  }
  .spinner {
    height: 100vh;
    i {
      margin: 20em auto;
      @media (min-width: 1024px) {
        margin: 30em auto;
      }
    }
  }
  .not-found {
    text-align: center;
    padding: 25% 0;
    height: 100%;
    font-size: 25px;
  }
</style>