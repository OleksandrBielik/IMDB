<template>
  <header>
    <div class="container">
      <div class="wrapper w-100">
        <div
          class="burger-menu"
          @click="onClick"
        >
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
        <router-link
          to="/"
          class="logo"
        >
          IMDb
        </router-link>
        <search-form />
      </div>
      <div class="registration">
        Sign in
      </div>
    </div>
  </header>
</template>

<script>
import SearchForm from './SearchForm.vue'

export default {
  name: 'AppHeader',
  components: { SearchForm },
  methods: {
    onClick() {
      this.$emit('on-click', true)
      document.querySelector('body').style.overflow = 'hidden'
    },
  }
}
</script>
