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
import "vue3-carousel/dist/carousel.css";
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
        { img: "/public/Slide1.jpeg" },
        { img: "/public/slide2.jpeg" },
        { img: "/public/slide3.jpeg" },
        { img: "/public/slide5.jpeg" },
        { img: "/public/slide6.jpeg" },
        { img: "/public/slide7.jpeg" },
      ],
    };
  },
});
</script>
<style>
.carousel__item {
  min-height: 500px;
  width: 90%;
  /* background-color: var(--vc-clr-primary); */
  /* color: var(--vc-clr-white); */
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
  background: #80073c;
}
.carousel__prev {
  margin-left: 3%;
}
.carousel__next {
  margin-right: 3%;
}
img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}
.carousel__pagination {
  margin-top: -35px;
  /* background: #80073c; */
}
.carousel__pagination-button {
  background: lightgray;
}
.carousel__pagination-button--active {
  background: #80073c;
}
@media (max-width: 1400px) {
  .carousel__pagination {
    margin-top: -60px;
  }
}
@media (max-width: 1200px) {
  .carousel__item {
    width: 100%;
    min-height: 300px;
  }
  .carousel__prev {
    margin-left: 1%;
  }
  .carousel__next {
    margin-right: 1%;
  }
  img {
    width: 95%;
  }
  .carousel__pagination {
    margin-top: -20px;
    /* background: #80073c; */
  }
}
@media (max-width: 992px){
    .carousel__pagination {
    margin-top: 0px;
  }
}
@media (max-width: 768px) {
  .carousel__item {
    width: 90%;
  }
  .carousel__prev {
    margin-left: 4%;
  }
  .carousel__next {
    margin-right: 4%;
  }
}
@media (max-width: 420px) {
  .carousel__item {
    width: 100%;
  }
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    /* border: 5px solid white; */
    background: transparent;
    color: #000;
  }
  .carousel__pagination {
    margin-top: -40px;
  }
  .carousel__prev {
    margin-left: 3%;
  }
  .carousel__next {
    margin-right: 3%;
  }
}
@media (max-width: 375px){
    .carousel__pagination {
    margin-top: -70px;
  }
}
</style>
