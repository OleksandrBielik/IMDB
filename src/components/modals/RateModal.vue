<template>
  <form
    class="modal"
    @submit.prevent="onSubmit"
  >
    <button
      type="button"
      class="close-btn"
      aria-label="Close button"
      @click="onClose"
    >
      X
    </button>
    <div class="rating-star">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="81"
        class="ipc-rating-display__star"
        viewBox="0 0 85 81"
        fill="currentColor"
        role="presentation"
      ><path d="M29.4278383,26.4913549 L2.77970363,28.6432143 L2.63541119,28.6580541 C0.066865676,28.979767 -0.941953299,32.2222005 1.05754936,33.9345403 L21.3502824,51.3123553 L15.1650027,77.2797478 L15.1355051,77.4163845 C14.6437005,79.9569202 17.4230421,81.9201545 19.6736611,80.5499671 L42.5,66.6529451 L65.3263389,80.5499671 L65.447392,80.6201968 C67.7156822,81.8722123 70.4448402,79.8400226 69.8349973,77.2797478 L63.6489629,51.3123553 L83.9424506,33.9345403 L84.0504483,33.8378644 C85.9390285,32.0703808 84.8461128,28.855226 82.2202964,28.6432143 L55.571407,26.4913549 L45.2865041,1.85440279 C44.2543406,-0.618134262 40.7456594,-0.618134262 39.7134959,1.85440279 L29.4278383,26.4913549 Z" /></svg>
      <div
        v-if="star"
        class="rating-value"
      >
        {{ star }}
      </div>
    </div>
    <div class="wrapper">
      <h2>RATE THIS</h2>
      <fieldset>
        <legend>{{ title }}</legend>
        <div class="rating-group">
          <rating-star
            v-for="(item,i) in 10"
            :key="i"
            :value="i+1"
            :star="star"
            tabindex="0"
            @on-change="onChange"
          />
        </div>
      </fieldset>
      <button
        v-if="!loading && !success"
        type="submit"
        class="rate logo"
        :disabled="disabled"
        :class="disabledClass"
        aria-label="Confirm rate button"
      >
        Rate
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
        class="spinner-circle"
      >
        <svg
          class="spinner"
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
    </div>
  </form>
</template>

<script>
import RatingStar from '@/components/modals/RatingStar.vue'

export default {
  name: 'RateModal',
  components: { RatingStar },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      star: 0,
      loading: false,
      success: false
    }
  },
  computed: {
    disabled() {
      return this.star ? false : 'disabled'
    },
    disabledClass() {
      return !this.star ? 'disabled' : ''
    }
  },
  methods: {
    onChange(star) {
      this.star = star
    },
    onSubmit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.success = true
        }, 1000)
      setTimeout(() => this.onClose(), 3000)
    },
    onClose() {
      this.$emit('on-close', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 262px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 568px;
    width: 100%;
    padding: 70px 15px 45px 15px;
    background-color: $card-bg-color;
    border-radius: 5px;
    box-shadow: -1px 4px 22px 0px rgba(0,0,0,0.75);
  }
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: $card-bg-color;
    opacity: 0.6;
  }
  button {
    background-color: transparent;
    cursor: pointer;
  }
  .close-btn {
    position: absolute;
    top: -40px;
    right: 10px;
    color: $white;
    width: 24px;
    height: 24px;
    margin-left: auto;
  }
  h2 {
    color: $gold-color;
    font-size: 12px;
    margin-bottom: 20px;
    font-weight: 800;
  }
  legend {
    margin-bottom: 20px;
    text-align: center;
  }
  .logo {
    margin: 0;
    width: 100%;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 320px;
    width: 100%;
  }
  .rating-group {
    display: flex;
    margin-bottom: 20px;
  }
  .rating-star {
    color: $light-blue-color;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
  .rating-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
  }
  .disabled {
    background-color: $gray;
  }
</style>
