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
      <router-link
        v-if="!userLogin"
        to="/login"
        class="registration"
      >
        Sign in
      </router-link>
      <button
        v-else
        type="button"
        class="user"
        @click="showModal"
      >
        {{ userLetter }}
      </button>
    </div>
    <div
      v-if="modal"
      class="overlay"
      @click="showModal"
    />
    <user-modal v-if="modal" />
  </header>
</template>

<script>
import UserModal from './modals/UserModal.vue'
import SearchForm from './SearchForm.vue'

export default {
  name: 'AppHeader',
  components: { SearchForm, UserModal },
  data() {
    return {
      modal: false
    }
  },
  computed: {
    userLogin() {
      return this.$store.getters['auth/getUserLogin']
    },
    userLetter() {
      try {
        return this.$store.getters['auth/getUserLogin'][0]
      } catch (error) {
        return ''
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('on-click', true)
      document.querySelector('body').style.overflow = 'hidden'
    },
    showModal() {
      this.modal = !this.modal
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 10px 0;
  background-color: $main-bg-color;
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  img {
    fill: currentColor;
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
  .w-100 {
    width: 100%;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: none;
  }
  .registration {
    white-space: nowrap;
  }
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: $gold-color;
    color: $black;
    cursor: pointer;
  }
  .overlay {
    position: absolute;
    top: 0;
    min-height: 100vh;
    width: 100%;
  }
}
</style>