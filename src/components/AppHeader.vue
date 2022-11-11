<template>
  <header>
    <div class="container">
      <div class="wrapper w-100">
        <button
          type="button"
          class="burger-menu"
          aria-label="Side menu open button"
          @click="onClick"
        >
          <svg
            class="burger-icon"
            width="25"
            height="25"
          >
            <use href="../assets/sprite.svg#icon-burger" />
          </svg>
        </button>
        <router-link
          to="/"
          class="logo"
        >
          IMDb
        </router-link>
        <search-form />
      </div>
      <theme-switcher />
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
        aria-label="User profile open button"
        @click="showModal"
      >
        {{ userLetter.toUpperCase() }}
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
import ThemeSwitcher from './ThemeSwitcher.vue'

export default {
  name: 'AppHeader',
  components: { 
    SearchForm, 
    UserModal, 
    ThemeSwitcher 
  },
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
    },
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
    background-color: inherit;
    color: $white;
    cursor: pointer;
  }
  .burger-icon {
    fill: currentColor;
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
    min-width: 28px;
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