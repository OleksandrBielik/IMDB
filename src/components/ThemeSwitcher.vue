<template>
  <div>
    <input
      id="theme-switcher"
      v-model="checked"
      name="theme-switcher"
      type="checkbox"
      class="visually-hidden"
      aria-label="Theme-switcher"
      tabindex="-1"
      @change="onSwitch"
    >
    <label
      class="switcher-wrapper"
      for="theme-switcher"
      tabindex="0"
      @keydown.enter="onKeyDown"
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
            width="16"
            height="16"
          >
            <use href="../assets/sprite.svg#icon-moon" />
          </svg>
        </transition>
        <transition name="fade-short">
          <svg
            v-if="checked"
            width="16"
            height="16"
          >
            <use href="../assets/sprite.svg#icon-sun" />
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
    },
    onKeyDown() {
      this.checked = !this.checked
      this.onSwitch()
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
