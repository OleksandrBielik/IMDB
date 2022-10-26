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
      <button type="submit">
        SUBMIT
      </button>
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
      save: false
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
    this.login = JSON.parse(localStorage.getItem('savedData')).login
    this.password = JSON.parse(localStorage.getItem('savedData')).password
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('auth/onLogin', { login: this.login, password: this.password })
        .then(() => {
          this.$router.push({ name:'home' })
          if (this.save) {
            localStorage.setItem('savedData', JSON.stringify({ login: this.login, password: this.password }))
          }
        })
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
</style>
