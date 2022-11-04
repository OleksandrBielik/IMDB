<template>
  <main>
    <div class="wrapper">
      <h1>Page not found</h1>
      <nav>
        <a
          href="/"
          class="link"
        >
          Back to main page
        </a>
      </nav>
    </div>
    <iframe src="https://embed.lottiefiles.com/animation/36395" />
  </main>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
  iframe {
    height: 100vh;
    width: 100%;
    pointer-events: none;
  }
  main {
    padding-top: 51px;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
  }
  h1 {
    margin-bottom: 20px;
  }
  .wrapper {
    position: absolute;
    top: 70px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
  }
</style>
