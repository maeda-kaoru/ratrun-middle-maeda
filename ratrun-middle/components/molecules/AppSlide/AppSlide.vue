<template>
  <div class="slider-inner">
    <Carousel @slide-start="slideFunction" ref="myCarousel">
      <Slide v-for="(image, key) in images" :key="key">
        <img :src="getImg(image)" alt="" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="gallery">
      <button
        @click="clickImg(key)"
        v-for="(image, key) in images"
        :key="key"
        :class="key == currentPage ? 'focused-img' : 'non-focused-img'"
      >
        <img :src="getImg(image)" alt="" />
      </button>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(props) {
    const myCarousel = ref(null);
    const currentPage = ref(0);
    const slideFunction = ({ slidingToIndex }) => {
      currentPage.value = slidingToIndex;
    };
    const getImg = (file) => {
      return new URL(`../../../assets/img/${file}`, import.meta.url).href;
    };
    const clickImg = (carouselNum) => {
      myCarousel.value.slideTo(carouselNum);
    };
    const images = [
      "lamp-color.png",
      "lamp-color.png",
      "lamp-color.png",
      "lamp-color.png",
      "lamp-color.png",
    ];
    return {
      myCarousel,
      currentPage,
      slideFunction,
      getImg,
      clickImg,
      getImg,
      images,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  height: auto;
  width: 91%;
  @include mobile {
    width: 90%;
    height: auto;
  }
}
.gallery {
  display: flex;
  gap: 20px;
  margin: 40px 0;
  justify-content: center;
  @include mobile {
    gap: 10px;
    margin: 20px 0;
  }
  img {
    width: 160px;
    height: auto;
    @include mobile {
      width: 50px;
      height: 35px;
    }
  }
  button {
    background: #fff;
  }
  .focused-img {
    border: 1px solid red;
    background: #fff;
  }
  .non-focused-img {
    border: none;
    background: #fff;
  }
}
</style>