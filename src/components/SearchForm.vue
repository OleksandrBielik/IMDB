<template>
  <div class="search-form">
    <form
      class="form-main"
      name="search-form"
      @submit.prevent="onSubmit"
    >
      <input
        v-model="query"
        type="search"
        name="search"
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
      if (this.$route.query.query === this.query) {
        return
      }
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

<style lang="scss" scoped>
.search-form {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .search-button {
    display: inline-block;
    margin-right: 20px;
    @media (min-width:400px) {
      display:none;
    }
  }
  .form-main {
    color: $black;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 12px;
    @media (min-width:400px) {
      display:flex;
    }
    input {
      padding: 0 10px;
      border: none;
      height: 30.69px;
      width: 100%;
      background-color: $white;
    }
    button {
      background-color: $white;
      border: none;
      padding: 0 10px;
      height: 30.69px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: inherit;
      cursor: pointer;
    }
  }
  .form-mobile {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: $white;
    background-color: $black;
    input {
      height: 100%;
      color: inherit;
      background-color: inherit;
      outline: none;
    }
    button {
      color: inherit;
      background-color: inherit;
    }
  }
}
</style>