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
      <button
        type="submit"
        aria-label="Search button"
      >
        <svg
          class="search-icon"
          width="17"
          height="17"
        >
          <use href="../assets/sprite.svg#icon-search" />
        </svg>
      </button>
    </form>
    <div
      class="search-button"
      @click.prevent="mobileSearch = true"
    >
      <svg
        class="search-icon-mob"
        width="17"
        height="17"
      >
        <use href="../assets/sprite.svg#icon-search" />
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
    @media (min-width:470px) {
      display:none;
    }
  }
  .search-icon-mob {
    fill: $white;
  }
  .form-main {
    color: $black;
    width: 100%;
    max-width: 600px;
    height: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 auto;
    @media (min-width:470px) {
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
    .search-icon {
      fill: $black;
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
    z-index: 3;
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