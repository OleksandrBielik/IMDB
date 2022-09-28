<template>
  <header>
    <div class="container">
      <div class="wrapper">
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
        <div class="logo">
          IMDb
        </div>
        <form>
          <input type="search">
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
        <div class="search">
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
        <div>Sign in</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
    console.log(process.env.VUE_APP_BASE_URL)
    this.$store.dispatch('search/onSearch', { page:2 })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  padding: 10px 0;
  background-color: black;
  color: #fff;
}
.search {
  color: #fff;
}
img {
  fill: currentColor;
}
.logo {
  background-color: #F5C518;
  color: black;
  font-size: 18px;
  font-weight: 800;
  padding: 5px;
  border-radius: 5px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
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
  @media (min-width:600px) {
    display:none;
  }
}
.container {
  max-width: 1280px;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
