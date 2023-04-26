<template>
  <carousel :itemsToShow="2" :wrap-around="true" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
        :info="item.info"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>
      </Card>
    </slide>

    <!-- addons -->
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import items from "../seeders/items.js";
import Card from "../components/UI/Card-ui.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  components: {
    Card,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items: items,
      // corousel
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        },
      },
    };
  },
};
</script>