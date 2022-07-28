<template>
  <div class="swiper-container" ref="Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carsousel",
  props: ["list"],
  watch: {
    list: {
      //现在咱们通过watch监听bannerList属性的属性值的变化
      //如果执行handler方法，代表组件实例身上这个属性的属性已经有了
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            this.$refs.Swiper,
            {
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            },
            1000
          );
        });
      },
    },
  },
};
</script>

<style>
</style>