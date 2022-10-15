<template>
  <router-link
    v-if="item.media_type === 'tv' && !item.card_type"
    
    :to="link"
    class="poster-card"
  >
    <article @click="addRecently(item)">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.name + 'image'"
        >
      </div>
    </article>
  </router-link>
  <router-link
    v-else-if="item.media_type === 'person' && !item.card_type"
    :to="link"
    class="person-card"
  >
    <article @click="addRecently(item)">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.name + 'image'"
        >
      </div>
      <p class="name">
        {{ item.name }}
      </p>
    </article>
  </router-link>
  <router-link
    v-else-if="item.card_type === 'flick'"
    :to="link"
    class="card"
  >
    <article @click="addRecently(item)">
      <div class="thumb">
        <img
          :src="imgURL"
          :alt="item.title + 'poster image'"
        >
      </div>
      <div class="wrapper">
        <div class="wrapper">
          <img
            class="star-icon"
            src="../assets/star-icon.svg"
            alt="rating icon"
            width="15"
          >
          <div class="rating">
            {{ rating }}
          </div>
          <div class="media-type">
            {{ item.media_type }}
          </div>
        </div>
        <div class="title">
          {{ title }}
        </div>
      </div>
    </article>
  </router-link>
  <li
    v-else-if="item.card_type === 'flex-item'"
    class="item-card"
  >
    <router-link
      :to="link"
    >
      <article @click="addRecently(item)">
        <div class="thumb">
          <img
            :src="imgURL"
            :alt="item.title + 'poster image'"
          >
        </div>
        <div class="wrapper">
          <div class="wrapper">
            <img
              class="star-icon"
              src="../assets/star-icon.svg"
              alt="rating icon"
              width="15"
            >
            <div class="rating">
              {{ rating }}
            </div>
            <div class="media-type">
              {{ item.media_type }}
            </div>
          </div>
          <div class="title">
            {{ title }}
          </div>
        </div>
      </article>
    </router-link>
  </li>
</template>

<script>
import { card } from '@/components/mixins/card';

export default {
  mixins: [card]
}
</script>