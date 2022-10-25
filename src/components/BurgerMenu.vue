<template>
  <aside :class="{show: menu}">
    <div class="panel">
      <div class="wrapper-header">
        <button
          type="button"
          @click="onClick"
          @keyup.enter="onClick"
        >
          X
        </button>
      </div>
      <ul class="panel-list">
        <li
          tabindex="0"
          @click="addActive"
          @keyup.enter="addActive"
        >
          <div class="wrapper">
            <svg
              id="panel-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" /></svg>
            <span>Movies</span>
            <svg
              id="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
          </div>
          <ul>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="/movie/now-playing?page=1"
                tabindex="-1"
              >
                Now Playing
              </router-link>
            </li>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="/movie/popular?page=1"
                tabindex="-1"
              >
                Popular
              </router-link>
            </li>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="/movie/top-rated?page=1"
                tabindex="-1"
              >
                Top Rated
              </router-link>
            </li>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="/movie/upcoming?page=1"
                tabindex="-1"
              >
                Upcoming
              </router-link>
            </li>
          </ul>
        </li>
        <li
          tabindex="0"
          @click="addActive"
          @keyup.enter="addActive"
        >
          <div class="wrapper">
            <svg
              id="panel-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" /></svg>
            <span>TV Shows</span>
            <svg
              id="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
          </div>
          <ul>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="tv/on-air?page=1"
                tabindex="-1"
              >
                TV On The Air
              </router-link>
            </li>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="/tv/popular?page=1"
                tabindex="-1"
              >
                Popular
              </router-link>
            </li>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="/tv/top-rated?page=1"
                tabindex="-1"
              >
                Top Rated
              </router-link>
            </li>
          </ul>
        </li>
        <li
          tabindex="0"
          @click="addActive"
          @keyup.enter="addActive"
        >
          <div class="wrapper">
            <svg
              id="panel-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
            <span>Celebrity</span>
            <svg
              id="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
          </div>
          <ul>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <router-link
                to="/person/popular?page=1"
                tabindex="-1"
              >
                Popular
              </router-link>
            </li>
          </ul>
        </li>
        <li
          tabindex="0"
          @click="addActive"
          @keyup.enter="addActive"
        >
          <div class="wrapper">
            <svg
              id="panel-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
            <span>Comunity</span>
            <svg
              id="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
          </div>
          <ul>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <a
                href="https://help.imdb.com/imdb"
                tabindex="-1"
              >Help Center</a>
            </li>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <a
                href="https://contribute.imdb.com/czone"
                tabindex="-1"
              >Contributor Zone</a>
            </li>
            <li
              tabindex="0"
              @click="onClick"
              @keyup.enter="onClick"
            >
              <a
                href="https://www.imdb.com/poll"
                tabindex="-1"
              >Polls</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div
      class="backdrop"
      @click="onClick"
    />
  </aside>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    menu: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('on-click', false)
      document.querySelector('body').style.overflow = 'visible'
    },
    addActive(e) {
      const activeEl = document.querySelector('aside').querySelector('li.active')
      if (e.currentTarget.classList.contains('active')) {
        e.currentTarget.classList.remove('active')
      } else if (activeEl) {
        activeEl.classList.remove('active')
        e.currentTarget.classList.add('active')
      } else {
        e.currentTarget.classList.add('active')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .backdrop {
    width: 100%;
    height: 100%;
    background-color: $card-bg-color;
    opacity: 0;
    transition: all 0ms ease-out;
  }
  aside {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;

    visibility: hidden;
    pointer-events: none;
  }
  .panel {
    transform: translate(-100%);
    min-width: 280px;
    background-color: $card-bg-color;
    transition: all 200ms ease-out;
  }
  .wrapper-header {
    background-color: $main-bg-color;
    height: 48px;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (min-width:400px) {
      height: 50.69px;
    }
  }
  button {
    background-color: inherit;
    color: $white;
    width: 24px;
    height: 24px;
  }
  .active {
    color: $gold-color;
  }
  .panel-list {
    padding: 0 15px;
    width: 100%;
    margin-top: 10px;
    li {
      width: 100%;
      color: $secondary-gray;
    }
    li:hover, li:focus {
      color: $white;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .panel-list > li {
    padding: 8px 0;
    ul {
      display: none;
    }
  }
  .panel-list > li.active {
    color: $gold-color;
  }
  #arrow {
    transform: rotate(90deg);
    margin-left: auto;
  }
  #panel-icon {
    margin-right: 10px;
  }
  li.active {
    & > ul{
      display: block;
      margin-top: 10px;
      li {
        padding: 8px 15px 8px 34px;
      }
    }
    #arrow {
      transform: rotate(270deg);
    }
  }
  aside.show {
    visibility: visible;
    pointer-events: auto;
    .panel {
      transform: translate(0);
    }
    .backdrop {
      transition: all 100ms ease-out 150ms;
      opacity: 0.5;
    }
  }

</style>