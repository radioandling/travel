<template>
<div class="swiper">
  <swiper :options="swiperOption">
    <swiper-slide v-for='item in swiperData' :key='item.id'>
      <img class="swiper-item-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  props: {
    swiperData: {
      type: Array
    }
  }
}
</script>
<style lang='less' scoped>
.swiper{
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 3.5rem;
  .swiper-item-img{
    width: 100%;
    height: 3.5rem;
  }
}
</style>
