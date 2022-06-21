<template>
  <swiper
      :modules="Autoplay"
      :slides-per-view="1"
      :space-between="250"
      :centeredSlides="true"
      :loop="true"
      :autoplay='{
        "delay": 2500,
      }'
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="../assets/images/jpg/sedarte-slide-1-min.jpg" alt="" class="swiper-slider__slide-img">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/jpg/sedarte-slide-2-min.jpg" alt="" class="swiper-slider__slide-img">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/jpg/sedarte-slide-3-min.jpg" alt="" class="swiper-slider__slide-img">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/jpg/sedarte-slide-4-min.jpg" alt="" class="swiper-slider__slide-img">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/jpg/sedarte-slide-5-min.jpg" alt="" class="swiper-slider__slide-img">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/jpg/sedarte-slide-6-min.jpg" alt="" class="swiper-slider__slide-img">
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper/core';

import 'swiper/css';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

export default {
  name: "SwiperSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [ Autoplay ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/swiper-slider";
</style>
