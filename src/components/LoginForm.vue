<template>
  <fieldset v-if="userRole === 'guest'">
    <legend>Login</legend>
    <form @submit.prevent="onSubmit">
      <input
        v-model="login"
        required
        class="login"
        type="text"
        placeholder="Login"
      >
      <input
        v-model="password"
        required
        class="password"
        type="password"
        placeholder="Password"
      >
      <div class="wrapper-checkbox">
        <input
          id="checkbox-login"
          v-model="save"
          type="checkbox"
        >
        <label for="checkbox-login">Remember me?</label>
      </div>
      <button
        v-if="!loading && !success"
        type="submit"
      >
        SUBMIT
      </button>
      <div
        v-else-if="success"
        class="success-animation"
      >
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        ><circle
          class="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        /><path
          class="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        /></svg>
      </div>
      <div
        v-else-if="loading"
        class="wrapper-spinner-circle"
      >
        <svg
          class="spinner-circle"
          viewBox="0 0 50 50"
        >
          <circle
            class="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="5"
          />
        </svg>
      </div>
    </form>
  </fieldset>
  <div
    v-else
    class="wrapper"
  >
    <p>You have already logged in <span>{{ userLogin }}</span></p>
    <p>
      Back to <router-link
        to="/"
        class="link"
      >
        home page
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      login: '',
      password: '',
      save: false,
      loading: false,
      success: false
    }
  },
  computed: {
    userRole() {
      return this.$store.getters['auth/getUserRole']
    },
    userLogin() {
      return this.$store.getters['auth/getUserLogin']
    },
  },
  mounted() {
    try {
      this.login = JSON.parse(localStorage.getItem('savedData')).login || ''
      this.password = JSON.parse(localStorage.getItem('savedData')).password || ''
    } catch (error) {
      return
    }
  },
  methods: {
    onSubmit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.success = true
      }, 1000)
      setTimeout(() => {
        this.$store.dispatch('auth/onLogin', { login: this.login, password: this.password })
        .then(() => {
          this.$router.push({ name:'home' })
          if (this.save) {
            localStorage.setItem('savedData', JSON.stringify({ login: this.login, password: this.password }))
          }
        })
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
  fieldset {
    padding: 50px;
    max-width: 320px;
    text-align: center;
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      border-radius: 5px;
      padding: 15px 10px;
      margin-bottom: 20px;
    }
    button {
      max-width: 150px;
      width: 100%;
      margin: 0 auto;
      padding: 15px 10px;
      border-radius: 5px;
      font-weight: 800;
      color: $black;
      background-color: $gold-color;
      cursor: pointer;
    }
  }
  legend {
    font-weight: 800;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
  }
  span {
    color: $gold-color;
  }
  .wrapper-checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    label {
      cursor: pointer;
    }
    input {
      margin: 0;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .wrapper-spinner-circle {
    height: 50px;
    margin-top: 10px;
    position: relative;
  }
</style>
