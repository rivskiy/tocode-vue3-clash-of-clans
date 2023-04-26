<template>
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img class="card-img" :src="imgUrl" :alt="title" />
    </div>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot name="body"></slot>
      <router-link
        class="link"
        style="display: block; margin-top: 16px"
        v-if="link"
        :to="link"
      >
        See more</router-link
      >
    </div>
    <Stats :stats="stats" />
  </div>
</template>

<script>
import Stats from "@/components/UI/Stats-ui.vue";

export default {
  components: {
    Stats,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    },
    info: {
      type: Array,
    },
  },
  data() {
    return {
      stats: this.info,
    };
  },
};
</script>