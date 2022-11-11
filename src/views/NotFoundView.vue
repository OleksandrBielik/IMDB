<template>
  <page-not-found />
</template>

<script>
import PageNotFound from '@/components/errors/PageNotFound.vue'

export default {
  name: 'NotFoundView',
  components: { PageNotFound },
  mounted() {
    this.$emit('on-error', true)
  }
}
</script>
