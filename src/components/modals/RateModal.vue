<template>
  <div class="modal">
    <button
      type="button"
      class="close-btn"
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
      <div class="rating-value">
        1
      </div>
    </div>
    <div class="wrapper">
      <h2>RATE THIS</h2>
      <fieldset>
        <legend>{{ title }}</legend>
        <div class="rating-group">
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>

          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
          <label>
            <input
              type="radio"
              tabindex="0"
              name="rating"
              value="1"
              aria-label="Rate 1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
          </label>
        </div>
      </fieldset>
      <button
        type="button"
        class="rate logo"
      >
        Rate
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RateModal',
  props: {
    title: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
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
  ul {
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
</style>
