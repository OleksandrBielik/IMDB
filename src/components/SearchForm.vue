<template>
  <div class="search-form">
    <form
      class="form-main"
      @submit.prevent="onSubmit"
    >
      <input
        v-model="query"
        type="search"
        placeholder="Search IMDb"
      >
      <button type="submit">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 512 512"
        >
          <title />
          <g id="icomoon-ignore" />
          <path
            fill="currentColor"
            d="M496.131 435.698l-121.276-103.147c-12.537-11.283-25.945-16.463-36.776-15.963 28.628-33.534 45.921-77.039 45.921-124.588 0-106.039-85.961-192-192-192s-192 85.961-192 192 85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-0.5 10.831 4.68 24.239 15.963 36.776l103.147 121.276c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.307 128-128 128z"
          />
        </svg>
      </button>
    </form>
    <div
      class="search-button"
      @click.prevent="mobileSearch = true"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 512 512"
      >
        <title />
        <g id="icomoon-ignore" />
        <path
          fill="currentColor"
          d="M496.131 435.698l-121.276-103.147c-12.537-11.283-25.945-16.463-36.776-15.963 28.628-33.534 45.921-77.039 45.921-124.588 0-106.039-85.961-192-192-192s-192 85.961-192 192 85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-0.5 10.831 4.68 24.239 15.963 36.776l103.147 121.276c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.307 128-128 128z"
        />
      </svg>
    </div>
    <form
      v-if="mobileSearch"
      class="form-mobile"
      @submit.prevent="onSubmit"
    >
      <input
        v-model="query"
        type="search"
        placeholder="Search IMDb"
      >
      <button
        type="button"
        @click.prevent="closeMobileSearch"
      >
        X
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      query: '',
      mobileSearch: false
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/search',
        query: {
          query: this.query,
          page: 1
        }
      })
    },
    closeMobileSearch() {
      this.query = ''
      this.mobileSearch = false
    }
  }
}
</script>