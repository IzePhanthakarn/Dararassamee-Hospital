<template>
  <Carousel
    :settings="settings"
    :autoplay="4000"
    :wrap-around="true"
    :breakpoints="breakpoints"
  >
    <Slide v-for="(item, index) in image" :key="index">
      <div class="carousel__item">
        <img :src="item.img" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
// import "vue3-carousel/dist/carousel.css";
import "./slider.css"
export default defineComponent({
  name: "ExamplePagination",
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      image: [
        { img: "/public/slide1.jpeg" },
        { img: "/public/slide2.jpeg" },
        { img: "/public/slide3.jpeg" },
        { img: "/public/slide4.jpeg" },
        { img: "/public/slide5.jpeg" },
        { img: "/public/slide6.jpeg" },
      ],
    };
  },
});
</script>
<style scoped>
/* @import url("./slider.css"); */
@import url("./slider2.css");
</style>
