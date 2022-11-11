<template>
  <div class="modal-user">
    <div class="backdrop">
      <div class="profile-image">
        {{ userLetter.toUpperCase() }}
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
          aria-label="Watchlist"
        >
          <svg
            width="24"
            height="24"
          >
            <use href="../../assets/sprite.svg#icon-watchlist" />
          </svg>
          <span>My watchlist</span>
        </button>
        <div
          v-if="items.length"
          class="watchlist"
        >
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
        <div
          v-else
          class="empty"
        >
          Empty
        </div>
        <div
          v-if="items.length"
          class="control-panel"
        >
          <button
            type="button"
            class="remove-button"
            aria-label="Delete from watchlist"
            :class="{disabled: selectedList.length === 0}"
            :disabled="disabled"
            @click="onRemove"
          >
            Remove{{ '(' + selectedList.length + ')' }}
          </button>
        </div>
        <button
          type="button"
          class="logout"
          aria-label="Logout button"
          @click="onLogout"
        >
          <svg
            class="icon-logout"
            width="16"
            height="20"
          >
            <use href="../../assets/sprite.svg#icon-logout" />
          </svg>
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
    disabled() {
      return this.selectedList.length ? false : 'disabled'
    },
    items() {
      return this.$store.getters['watchlist/getItems']
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('auth/onLogout')
      this.$store.dispatch('watchlist/clearItems')
      this.$store.dispatch('rated/clearItems')
      this.$router.push({
        name: 'home'
      })
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
      console.log(1)
      const arr = []
      let res = [...this.items]
      this.selectedList.forEach(item => {
        arr.push(item.id)
      })
      arr.forEach(item => {
        res = res.filter(elem => elem.id !== item)
      })
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
    right: 0;
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
    .icon-logout {
      margin-right: 8px;
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
    .disabled {
      background-color: $gray;
      color: $white;
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 800;
      height: 220px;
    }
  }
</style>