<template>
  <header>
    <div class="container">
      <div class="wrapper w-100">
        <div class="burger-menu">
          <svg
            id="iconContext-menu"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="ipc-icon ipc-icon--menu"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          ><path
            fill="none"
            d="M0 0h24v24H0V0z"
          /><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" /></svg>
        </div>
        <a
          href="/"
          class="logo"
        >
          IMDb
        </a>
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
      </div>
      <div class="wrapper">
        <div
          class="search"
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
        <div class="registration">
          Sign in
        </div>
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
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
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

<style lang="scss" scoped>
header {
  padding: 10px 0;
  background-color: #121212;
  color: #fff;
  position: relative;
}
.search {
  color: #fff;
}
img {
  fill: currentColor;
}
.logo {
  display: block;
  background-color: #F5C518;
  color: black;
  font-size: 18px;
  font-weight: 800;
  padding: 5px;
  border-radius: 5px;
  margin-right: 12px;
  text-decoration: none;
}
.wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
}
.burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  @media (min-width:400px) {
    display:none;
  }
}
.w-100 {
  width: 100%;
}
.container {
  max-width: 1280px;
  padding: 0 15px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  padding: 0 10px;
  border: none;
  height: 30.69px;
  width: 100%;
  background-color: #fff;
}
.form-main {
  color: black;
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
}
button {
  background-color: #fff;
  border: none;
  padding: 0 10px;
  height: 30.69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
}
.registration {
  white-space: nowrap;
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
  input {
    color: #fff;
    height: 100%;
    background-color: black;
  }
  button {
    background-color: black;
  }
}
</style>
