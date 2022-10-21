<template>
  <tv-card
    v-if="item.media_type === 'tv' && !item.card_type"
    :item="item"
    :index="index"
    :path="path"
  />
  <person-card
    v-else-if="item.media_type === 'person' && !item.card_type"
    :item="item"
    :index="index"
    :path="path"
  />
  <image-card 
    v-else-if="item.media_type === 'image'" 
    :item="item"
    :index="index"
    :path="path"
  />
  <video-card
    v-else-if="item.media_type === 'video'" 
    :item="item"
    :index="index"
    :path="path"
  />
  <base-card
    v-else-if="item.card_type === 'flick'"
    :item="item"
    :index="index"
    :path="path"
  />
  <flex-card
    v-else-if="item.card_type === 'flex-item'"
    :item="item"
    :index="index"
    :path="path"
  />
</template>

<script>
import BaseCard from './cards/BaseCard.vue';
import FlexCard from './cards/FlexCard.vue';
import ImageCard from './cards/ImageCard.vue';
import PersonCard from './cards/PersonCard.vue';
import TvCard from './cards/TvCard.vue';
import VideoCard from './cards/VideoCard.vue';


export default {
  name: 'CardItem',
  components: { 
    BaseCard, 
    FlexCard, 
    PersonCard, 
    TvCard,
    ImageCard,
    VideoCard
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    path: {
      type: String,
      required: true
    },
  },
}
</script>