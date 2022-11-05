<template>
  <section
    v-if="items.length || componentName === 'Recently'"
    class="slider-list"
  >
    <h2>{{ title }}</h2>
    <div
      v-if="loading"
      class="spinner"
    >
      <i />
    </div>
    <div
      v-else-if="error"
      class="error"
    >
      <svg
        id="Layer_1"
        enable-background="new 0 0 52 52"
        version="1.1"
        width="100"
        viewBox="0 0 52 52"
        fill="#ffffff"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      ><g><path d="M49.4656715,41.2599487l-20.25-34.4099731C28.5256691,5.6900024,27.3256569,5,25.9956398,5   c-1.3200073,0-2.5299683,0.6900024-3.2099609,1.8499756l-20.25,34.4099731   c-0.710022,1.2000122-0.7200317,2.6400146-0.0300293,3.8500366C3.1856432,46.289978,4.3956652,47,5.7456408,47h40.5100098   c1.3499756,0,2.5599976-0.710022,3.2299805-1.8900146C50.1856422,43.8999634,50.1756325,42.4599609,49.4656715,41.2599487z    M23.9363747,19.8552856h3.3808594v3.1870117l-0.7246094,8.9189453H24.660984l-0.7246094-8.9189453V19.8552856z    M26.9065895,37.1985474c-0.3540039,0.3623047-0.7768555,0.5439453-1.2675781,0.5439453   c-0.4912109,0-0.9140625-0.1816406-1.2680664-0.5439453c-0.3544922-0.3623047-0.53125-0.7939453-0.53125-1.296875   c0-0.5019531,0.1767578-0.9345703,0.53125-1.296875c0.3540039-0.3623047,0.7768555-0.5439453,1.2680664-0.5439453   c0.4907227,0,0.9135742,0.1816406,1.2675781,0.5439453s0.53125,0.7949219,0.53125,1.296875   C27.4378395,36.4046021,27.2605934,36.8362427,26.9065895,37.1985474z" /></g></svg>
    </div>
    <div
      v-else
      class="wrapper"
    >
      <template v-if="componentName === 'Recently'">
        <p
          v-if="!items.length"
          class="description"
        >
          {{ description }}
        </p>
        <div
          v-if="items.length"
          class="wrapper"
        >
          <button
            type="button"
            class="link"
            @click="removeRecently"
          >
            {{ link }}
          </button>
        </div>
      </template>
      <template v-else>
        <template v-if="!['Credits', 'Images', 'Videos'].includes(componentName)">
          <p class="description">
            {{ description }}
          </p>
          <div class="wrapper">
            <router-link
              :to="routerLink"
              class="link"
            >
              {{ link }}
            </router-link>
          </div>
        </template>
      </template>  
      <div class="slider-wrapper">
        <Flicking
          ref="flicking"
          :options="{ moveType: 'freeScroll', bound: true, align: 'prev', bounce: '4%', duration: 2500 }"
        >
          <card-item
            v-for="(item, index) in items"
            :key="index + '' + Math.random()"
            :item="item"
            :index="index"
          />
        </Flicking>
        <button
          v-if="!last && items.length"
          class="arrow-next"
          @click.prevent="moveEnd"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          ><path
            d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
            style="fill:currentColor"
          /></svg>
        </button>
        <button
          v-if="last && items.length"
          class="arrow-prev"
          @click.prevent="moveStart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          ><path
            d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
            style="fill:currentColor"
          /></svg>
        </button>
      </div>
    </div>
  </section>
</template>


<script>
import CardItem from '@/components/CardItem.vue';
import { Flicking } from '@egjs/vue-flicking';

export default {
  name: 'SliderList',
  components: { 
    CardItem,
    Flicking
  },
  props: {
    componentName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      last: false,
      loading: false,
      error: true,
    }
  },
  computed: {
    items() {
      if (this.componentName === 'Recently') {
        return this.$store.getters[`home/get${this.componentName}`]
      } else {
        return this.$store.getters[`${this.$route.name}/get${this.componentName}`]
      }
    },
    description() {
      switch(this.componentName) {
        case 'Trending': return 'This week\'s top TV and movies'
        case 'Recently': return 'You have no recently viewed pages'
        case 'OnAir': return 'List of shows that are currently on the air'
        case 'Popular': return 'Most popular celebrity on TMDb'
        case 'Similar': return 'List of similar movies'
        case 'Images': return `List of ${this.$route.name} images`
        case 'Videos': return `List of ${this.$route.name} videos`
        default: return null
      }
    },
    title() {
      switch(this.componentName) {
        case 'Trending': return 'Fan favorites'
        case 'Recently': return 'Recently viewed'
        case 'OnAir': return 'On the air'
        case 'Popular': return 'Popular celebrity'
        case 'Similar': return 'Similar movies'
        case 'Credits': return 'Credits'
        case 'Images': return 'Images'
        case 'Videos': return 'Videos'
        default: return null
      }
    },
    link() {
      switch(this.componentName) {
        case 'Trending': return 'Get more weekly top >'
        case 'Recently': return 'Remove recently viewed >'
        case 'OnAir': return 'Get more on the air >'
        case 'Popular': return 'Get more popular celebrity >'
        case 'Similar': return 'Get more similar movies >'
        default: return null
      }
    },
    routerLink() {
      switch(this.componentName) {
        case 'Trending': return '/trending?page=1'
        case 'OnAir': return '/tv/on-air?page=1'
        case 'Popular': return '/person/popular?page=1'
        case 'Similar': return `/movie/${this.$route.params.id}/similar?page=1`
        default: return null
      }
    },
    exception() {
      return ['Recently', 'Images', 'Videos'].includes(this.componentName)
    }
  },
  mounted() {
    if (this.exception) {
      this.loading = false
      return
    } else {
      return this.$store.dispatch(`${this.$route.name}/fetch${this.componentName}`, { page: 1, id: this.$route.params.id })
        .then(res => this.loading = false)
        .catch(error => {
          if (error.response.status === 404) {
            this.error = true
          } else if (error.request.status >= 500) {
            console.log('server-side error');
          } else {
            console.log('Error', error.message);
          }
        });
    }
  },
  methods: {
    moveEnd() {
      this.$refs.flicking.moveTo(this.items.length-1);
      this.last = true
    },
    moveStart() {
      this.$refs.flicking.moveTo(0);
      this.last = false
    },
    removeRecently() {
      this.$store.dispatch('home/removeRecently')
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-list {
  position: relative;
  color: inherit;
  margin-bottom: 50px;
  @media (min-width: 1024px) {
    margin-bottom: 100px;
  }
  h2 {
    font-size: 30px;
    margin-bottom: 5px;
    color: $gold-color;
  }
  .description {
    padding: 20px 0;
    text-align: left;
  }
  .wrapper {
    text-align: right;
  }
  .slider-wrapper {
    position: relative;
  }
  .spinner {
    width: 100%;
    height: 300px;
  }
  .error {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
