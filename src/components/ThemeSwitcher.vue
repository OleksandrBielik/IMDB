<template>
  <div>
    <input
      id="theme-switcher"
      v-model="checked"
      name="theme-switcher"
      type="checkbox"
      class="visually-hidden"
      @change="onSwitch"
    >
    <label
      class="switcher-wrapper"
      for="theme-switcher"
    >
      <transition name="fade">
        <span
          v-if="checked"
          class="title-lightmode"
        >LIGHTMODE</span>
      </transition>
      <transition name="fade">
        <span
          v-if="!checked"
          class="title-darkmode"
        >DARKMODE</span>
      </transition>
      <span class="switcher">
        <transition name="fade-short">
          <svg
            v-if="!checked"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="16"
            height="16"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >

            <defs />
            <g
              style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 88.174 59.263 c -0.406 -0.246 -0.934 -0.174 -1.258 0.18 c -4.853 5.307 -11.13 8.79 -18.15 10.074 c -8.563 1.564 -17.229 -0.296 -24.395 -5.246 c -7.165 -4.949 -11.974 -12.393 -13.54 -20.959 c -1.567 -8.566 0.296 -17.23 5.246 -24.395 S 48.47 6.943 57.036 5.376 c 1.522 -0.278 3.118 -0.432 5.022 -0.484 c 0.477 -0.013 0.878 -0.361 0.958 -0.831 c 0.081 -0.47 -0.183 -0.932 -0.628 -1.103 c -7.671 -2.936 -16.019 -3.701 -24.137 -2.217 C 13.847 5.205 -2.376 28.69 2.087 53.094 c 2.162 11.822 8.798 22.094 18.686 28.925 c 7.604 5.253 16.429 7.986 25.476 7.986 c 2.719 0 5.459 -0.247 8.189 -0.747 c 15.596 -2.852 28.682 -13.886 34.155 -28.796 C 88.758 60.014 88.583 59.511 88.174 59.263 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </transition>
        <transition name="fade-short">
          <svg
            v-if="checked"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="16"
            height="16"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >

            <defs />
            <g
              style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 45 68 c -12.682 0 -23 -10.317 -23 -23 c 0 -12.682 10.318 -23 23 -23 c 12.683 0 23 10.318 23 23 C 68 57.683 57.683 68 45 68 z M 45 28 c -9.374 0 -17 7.626 -17 17 s 7.626 17 17 17 s 17 -7.626 17 -17 S 54.374 28 45 28 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 45 17.556 c -1.657 0 -3 -1.343 -3 -3 V 3 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 11.556 C 48 16.212 46.657 17.556 45 17.556 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 45 90 c -1.657 0 -3 -1.343 -3 -3 V 75.444 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 V 87 C 48 88.657 46.657 90 45 90 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 14.556 48 H 3 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 h 11.556 c 1.657 0 3 1.343 3 3 C 17.556 46.657 16.212 48 14.556 48 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 87 48 H 75.444 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 H 87 c 1.657 0 3 1.343 3 3 C 90 46.657 88.657 48 87 48 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 66.527 26.473 c -0.768 0 -1.535 -0.293 -2.121 -0.878 c -1.172 -1.172 -1.172 -3.071 0 -4.243 l 8.171 -8.171 c 1.172 -1.172 3.07 -1.171 4.242 0 c 1.172 1.172 1.172 3.071 0 4.243 l -8.171 8.171 C 68.063 26.18 67.295 26.473 66.527 26.473 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 15.302 77.698 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 8.171 -8.171 c 1.171 -1.172 3.071 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -8.171 8.171 C 16.837 77.405 16.069 77.698 15.302 77.698 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 23.473 26.473 c -0.768 0 -1.536 -0.293 -2.121 -0.878 l -8.171 -8.171 c -1.172 -1.172 -1.172 -3.071 0 -4.243 c 1.172 -1.172 3.072 -1.171 4.243 0 l 8.171 8.171 c 1.172 1.172 1.172 3.071 0 4.243 C 25.008 26.18 24.24 26.473 23.473 26.473 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 74.698 77.698 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -8.171 -8.171 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 8.171 8.171 c 1.172 1.171 1.172 3.071 0 4.242 C 76.233 77.405 75.466 77.698 74.698 77.698 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </transition>
      </span>
    </label>
  </div>
</template>

<script>

export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      checked: false
    }
  },
  methods: {
    onSwitch() {
      document.querySelector('body').classList.toggle('light-mode')
    }
  }
}
</script>

<style lang="scss" scoped>
  .switcher-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background-color: $black;
    min-width: 85px;
    height: 25px;
    border-radius: 15px;
    margin: 0 12px;
    padding: 5px;
    cursor: pointer;
  .switcher {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    max-height: 25px;
    border-radius: 50%;
    background-color: $white;
    height: 100%;
    transition: all 250ms ease-in-out;
  }
  .title-lightmode, .title-darkmode {
    width: 100%;
    display: block;
    font-size: 8px;
  }
  .title-lightmode {
    text-align: left;
    display: none;
  }
  .title-darkmode {
    text-align: right;
    padding-right: 5px;
    color: $white;
    font-weight: bold;
  }
}
  input#theme-switcher:checked + .switcher-wrapper {
    background-color: #AAB8B6;
    .switcher {
      transform: translateX(60px);
      transition: all 250ms ease-in-out;
    }
    .title-darkmode {
      display: none;
    }
    .title-lightmode {
      display: block;
      color: $black;
      padding-left: 5px;
      font-weight: bold;
    }
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.fade-short-enter-active, .fade-short-leave-active {
  transition: opacity 0.1s;
}
.fade-short-enter, .fade-short-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
