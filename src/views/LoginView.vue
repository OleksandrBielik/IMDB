<template>
  <main>
    <div class="container">
      <nav>
        <router-link
          to="/"
          class="logo"
        >
          IMDb
        </router-link>
      </nav>
      <login-form />
    </div>
  </main>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'VideoView',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
  main {
    height: 100vh;
  }
  .container {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
  .logo {
    margin-right: 0;
    font-size: 35px;
  }
</style>