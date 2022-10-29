<template>
  <div class="modal-user">
    <div class="backdrop">
      <div class="profile-image">
        {{ userLetter }}
      </div>
    </div>
    <div class="user-info">
      <div class="name">
        {{ userLogin }}
      </div>
      <div class="panel">
        <button
          type="button"
          class="watchlist"
        >
          <svg
            id="iconContext-watchlist"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            class="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre"
            viewBox="5 0 22 22"
            fill="currentColor"
            role="presentation"
          ><path
            d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
            fill="currentColor"
          /></svg>
          <span>My watchlist</span>
        </button>
        <button
          type="button"
          class="logout"
          @click="onLogout"
        >
          <img
            width="16"
            height="20"
            src="../../assets/logout.svg"
            alt="logout-icon"
          >
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserModal',
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
    onLogout() {
      this.$store.dispatch('auth/onLogout')
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-user {
    box-shadow: -1px 4px 22px 0px rgba(0,0,0,0.75);
    position: absolute;
    top: 50px;
    color: $black;
    max-width: 320px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    background-color: $white;
    margin-left: auto;
    @media(min-width: 400px) {
      right: 25px;
      top: 60px;
    }
    .backdrop {
      height: 80px;
      background-color: $black;
      position: relative;
    }
    .profile-image {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 800;
      font-size: 30px;
      border-radius: 50%;
      border: 3px solid $white;
      width: 80px;
      height: 80px;
      background-color: $gold-color;
      color: inherit;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      cursor: default;
    }
    .user-info {
      padding: 50px 15px 15px 15px;
      text-align: center;
    }
    .name {
      margin-bottom: 30px;
    }
    button {
      display: inline-flex;
      align-items: center;
      background-color: inherit;
      cursor: pointer;
    }
    .panel {
      display: flex;
      flex-direction: column;
    }
    .watchlist {
      margin-bottom: 10px;
    }
    .logout {
      img {
        margin-right: 8px;
      }
    }
  }
</style>