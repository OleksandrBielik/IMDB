<template>
  <aside :class="{show: menu}">
    <div class="panel">
      <div class="wrapper-header">
        <button
          class="close-button"
          type="button"
          aria-label="Close side menu button"
          @click="onClick"
        >
          X
        </button>
      </div>
      <ul class="panel-list">
        <li>
          <button
            type="button"
            class="wrapper"
            aria-label="Movie links"
            @click="addActive"
          >
            <svg
              class="panel-icon"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-movies" />
            </svg>
            <span>Movies</span>
            <svg
              class="arrow"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-arrow" />
            </svg>
          </button>
          <ul>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/movie/now-playing?page=1"
                tabindex="0"
              >
                Now Playing
              </router-link>
            </li>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/movie/popular?page=1"
                tabindex="0"
              >
                Popular
              </router-link>
            </li>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/movie/top-rated?page=1"
                tabindex="0"
              >
                Top Rated
              </router-link>
            </li>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/movie/upcoming?page=1"
                tabindex="0"
              >
                Upcoming
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <button
            type="button"
            class="wrapper"
            aria-label="TV shows links"
            @click="addActive"
          >
            <svg
              class="panel-icon"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-tv-shows" />
            </svg>
            <span>TV Shows</span>
            <svg
              class="arrow"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-arrow" />
            </svg>
          </button>
          <ul>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/tv/on-air?page=1"
                tabindex="0"
              >
                TV On The Air
              </router-link>
            </li>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/tv/popular?page=1"
                tabindex="0"
              >
                Popular
              </router-link>
            </li>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/tv/top-rated?page=1"
                tabindex="0"
              >
                Top Rated
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <button
            type="button"
            class="wrapper"
            aria-label="Celebrity links"
            @click="addActive"
          >
            <svg
              class="panel-icon"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-celebrity" />
            </svg>
            <span>Celebrity</span>
            <svg
              class="arrow"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-arrow" />
            </svg>
          </button>
          <ul>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <router-link
                to="/person/popular?page=1"
                tabindex="0"
              >
                Popular
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <button
            type="button"
            class="wrapper"
            aria-label="Comunity links"
            @click="addActive"
          >
            <svg
              class="panel-icon"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-comunity" />
            </svg>
            <span>Comunity</span>
            <svg
              class="arrow"
              width="24"
              height="24"
            >
              <use href="../assets/sprite.svg#icon-arrow" />
            </svg>
          </button>
          <ul>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <a
                href="https://help.imdb.com/imdb"
                tabindex="0"
              >Help Center</a>
            </li>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <a
                href="https://contribute.imdb.com/czone"
                tabindex="0"
              >Contributor Zone</a>
            </li>
            <li
              tabindex="-1"
              @click="onClick"
            >
              <a
                href="https://www.imdb.com/poll"
                tabindex="0"
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
      const activeEl = document.querySelector('aside').querySelector('.wrapper.active')
      if (activeEl) {
        activeEl.classList.remove('active')
      }
      this.$emit('on-click', false)
      document.querySelector('body').style.overflow = 'visible'
    },
    addActive(e) {
      const activeEl = document.querySelector('aside').querySelector('.wrapper.active')
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
  .close-button {
    background-color: inherit;
    color: $white;
    width: 24px;
    height: 24px;
  }
  .panel-list {
    padding: 0 15px;
    width: 100%;
    margin-top: 10px;
    li {
      width: 100%;
      color: $secondary-gray;
    }
    button:hover, button:focus, a:hover, a:focus {
      color: $white;
    }
    .wrapper.active:hover, .wrapper.active:focus {
      color: $gold-color;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: inherit;
    width: 100%;
    color: inherit;
  }
  .active {
    color: $gold-color;
  }
  .panel-list > li {
    padding: 8px 0;
    ul {
      display: none;
    }
  }
  .arrow {
    transform: rotate(90deg);
    margin-left: auto;
    fill: currentColor;
  }
  .panel-icon {
    margin-right: 10px;
    fill: currentColor;
  }
  .wrapper.active + ul {
    display: block;
    margin-top: 10px;
    li {
      padding: 8px 15px 8px 34px;
    }
  }
  .wrapper.active > .arrow {
    transform: rotate(270deg);
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