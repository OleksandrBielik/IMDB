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
          :options="{ moveType: 'freeScroll', bound: true, align: 'prev', bounce: '4%' }"
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
      loading: false
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
      return
    } else {
      this.$store.dispatch(`${this.$route.name}/fetch${this.componentName}`, { page: 1, id: this.$route.params.id })
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
}
</style>
