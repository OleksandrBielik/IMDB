<template>
  <div class="slider-list">
    <h2>{{ title }}</h2>
    <template v-if="componentName === 'Recently'">
      <p
        v-if="!items.length"
        class="description"
      >
        {{ description }}
      </p>
      <div
        v-if="items.length"
        class="wrapper"
      >
        <button
          type="button"
          class="link"
          @click="removeRecently"
        >
          {{ link }}
        </button>
      </div>
    </template>
    <template v-else>
      <p
        v-if="componentName !== 'Credits'"
        class="description"
      >
        {{ description }}
      </p>
      <div class="wrapper">
        <router-link
          v-if="componentName !== 'Credits'"
          :to="routerLink"
          class="link"
        >
          {{ link }}
        </router-link>
      </div>
    </template>
    <div class="slider-wrapper">
      <Flicking
        ref="flicking"
        :options="{ moveType: 'freeScroll', bound: true, align: 'prev', bounce: '4%' }"
      >
        <card-item
          v-for="(item, index) in items"
          :key="item.id + index"
          :item="item"
        />
      </Flicking>
      <button
        v-if="!last && items.length"
        class="arrow-next"
        @click.prevent="moveEnd"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ><path
          d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
          style="fill:currentColor"
        /></svg>
      </button>
      <button
        v-if="last && items.length"
        class="arrow-prev"
        @click.prevent="moveStart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ><path
          d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
          style="fill:currentColor"
        /></svg>
      </button>
    </div>
  </div>
</template>


<script>
import { sliderList } from '@/components/mixins/sliderList';

export default {
  mixins: [sliderList]
}
</script>
