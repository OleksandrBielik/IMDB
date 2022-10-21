import CardItem from '@/components/CardItem.vue';
import { Flicking } from '@egjs/vue-flicking';

export const sliderList = {
  name: 'SliderList',
  components: { 
    CardItem,
    Flicking
  },
  props: {
    path: {
      type: String,
      required: true
    },
    componentName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      last: false
    }
  },
  computed: {
    items() {
      if (this.componentName === 'Recently') {
        return this.$store.getters[`home/get${this.componentName}`]
      } else {
        console.log(this.$store.getters[`${this.path}/get${this.componentName}`], this.componentName)
        return this.$store.getters[`${this.path}/get${this.componentName}`]
      }
    },
    description() {
      switch(this.componentName) {
        case 'Trending': return 'This week\'s top TV and movies'
        case 'Recently': return 'You have no recently viewed pages'
        case 'OnAir': return 'List of shows that are currently on the air'
        case 'Popular': return 'Most popular celebrity on TMDb'
        case 'Similar': return 'List of similar movies'
        case 'Images': return `List of ${this.path} images`
        case 'Videos': return `List of ${this.path} videos`
        default: return
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
        default: return
      }
    },
    link() {
      switch(this.componentName) {
        case 'Trending': return 'Get more weekly top >'
        case 'Recently': return 'Remove recently viewed >'
        case 'OnAir': return 'Clear recently viewed >'
        case 'Popular': return 'Get more popular celebrity >'
        case 'Similar': return 'Get more similar movies >'
        default: return
      }
    },
    routerLink() {
      switch(this.componentName) {
        case 'Trending': return '/trending?page=1'
        case 'OnAir': return '/onAir?page=1'
        case 'Popular': return '/popular?page=1'
        case 'Similar': return `/movie/${this.$route.params.id}/similar?page=1`
        default: return
      }
    }
  },
  mounted() {
    const pathName = this.componentName === 'Recently' || this.componentName === 'Images' || this.componentName === 'Videos'
    if (pathName) {
      return
    } else {
      this.$store.dispatch(`${this.path}/fetch${this.componentName}`, { page: 1, id: this.$route.params.id })
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
    }
  }
}