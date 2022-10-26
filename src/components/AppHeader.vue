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