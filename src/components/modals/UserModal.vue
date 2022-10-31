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
          class="watchlist-button"
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
        <div class="control-panel">
          <button
            type="button"
            class="remove-button"
            @click="onRemove"
          >
            Remove{{ '(' + selectedList.length + ')' }}
          </button>
        </div>
        <div class="watchlist">
          <Flicking
            ref="flicking"
            :options="{ moveType: 'freeScroll', bounce: '1%', align: 'prev', bound: true }"
          >
            <watchlist-card
              v-for="item in items"
              :key="item.id"
              :item="item"
              @on-select="onSelect"
            />
          </Flicking>
        </div>
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
import WatchlistCard from '@/components/cards/WatchlistCard.vue'
import { Flicking } from '@egjs/vue-flicking';

export default {
  name: 'UserModal',
  components: { WatchlistCard, Flicking },
  data() {
    return {
      selectedList: []
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
    },
    items() {
      return this.$store.getters['watchlist/getItems']
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('auth/onLogout')
      location.reload()
    },
    onSelect({ item, method }) {
      if (method === 'push') {
        this.selectedList.push(item)
      } else {
        this.selectedList = this.selectedList.filter(elem => elem.id !== item.id)
      }
    },
    onRemove() {
      const arr = []
      let res = [...this.items]
      this.selectedList.forEach(item => {
        arr.push(item.id)
      })
      
      arr.forEach(item => {
        res = res.filter(elem => elem.id !== item)
      })
      console.log(res)
      this.$store.dispatch('watchlist/setItems', { items: res })
      this.selectedList = []
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
    .watchlist-button {
      margin-bottom: 10px;
    }
    .logout {
      img {
        margin-right: 8px;
      }
    }
    .control-panel {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
    }
    .remove-button {
      background-color: rgb(207, 15, 15);
      border-radius: 3px;
      padding: 2px 5px;
      font-size: 14px;
    }
  }
</style>