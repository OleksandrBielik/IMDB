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
      switch(this.path) {
        case '/': return this.$store.getters[`home/get${this.componentName}`]
        default: return this.$store.getters[`${this.path.slice(1)}/get${this.componentName}`]
      }
    },
    description() {
      switch(this.componentName) {
        case 'Trending': return 'This week\'s top TV and movies'
        case 'Recently': return 'You have no recently viewed pages'
        case 'OnAir': return 'List of shows that are currently on the air'
        case 'Popular': return 'Most popular celebrity on TMDb'
        default: return undefined
      }
    },
    title() {
      switch(this.componentName) {
        case 'Trending': return 'Fan favorites'
        case 'Recently': return 'Recently viewed'
        case 'OnAir': return 'On the air'
        case 'Popular': return 'Popular celebrity'
        default: return undefined
      }
    },
    link() {
      switch(this.componentName) {
        case 'Trending': return 'Get more weekly top >'
        case 'Recently': return 'Remove recently viewed >'
        case 'OnAir': return 'Clear recently viewed >'
        case 'Popular': return 'Get more popular celebrity >'
        default: return undefined
      }
    },
    routerLink() {
      switch(this.componentName) {
        case 'Trending': return '/trending?page=1'
        case 'OnAir': return '/onAir?page=1'
        case 'Popular': return '/popular?page=1'
        default: return undefined
      }
    }
  },
  mounted() {
    if (this.componentName === 'Recently') {
      return
    }
    switch(this.path) {
      case '/': this.$store.dispatch(`home/fetch${this.componentName}`, { page: 1 })
      break
      default: return
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