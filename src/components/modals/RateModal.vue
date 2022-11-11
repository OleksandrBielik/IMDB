<template>
  <div class="overlay-modal">
    <form
      class="modal"
      name="rating-form"
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
          width="86"
          height="81"
        ><use href="../../assets/sprite.svg#icon-big-star" /></svg>
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
              :star="star"
              :value="i+1"
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
  </div>
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
    },
  },
  data() {
    return {
      loading: false,
      success: false,
      star: 0
    }
  },
  computed: {
    disabled() {
      return this.star ? false : 'disabled'
    },
    disabledClass() {
      return !this.star ? 'disabled' : ''
    },
    rated() {
      return this.$store.getters['rated/getItems']
    },
  },
  mounted() {
    const index = this.rated.findIndex(item=> item.id === this.$route.params.id)
    if (index >= 0) {
      this.star = this.rated[index].rate
    } else {
      this.star = 0
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
        }, 700)

      setTimeout(() => {
        this.onClose()
        if (this.rated.find(item=> item.id === this.$route.params.id)) {
          const res = this.rated.map(item => {
            if (item.id === this.$route.params.id) {
              return { id: item.id, rate: this.star }
            } else {
              return item
            }
          })
          this.$store.dispatch('rated/setItems', { items: res } )
        } else {
          this.$store.dispatch('rated/addItem', { item: { id: this.$route.params.id, rate: this.star } })
        }
      }, 2500)

    },
    onClose() {
      this.$emit('on-close', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
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
    background-color: $black;
    border-radius: 50%;
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
    svg {
      fill: currentColor;
    }
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
  .overlay-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: none;
  }
</style>
