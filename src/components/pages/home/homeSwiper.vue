<!-- The ref attr used to find the swiper instance -->
<template>
<div class="swiper">
  <swiper :options="swiperOption">
    <swiper-slide v-for='item in swiperList' :key='item.id'>
      <img class="swiper-item-img" :src="item.url">
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
      },
      swiperList: [
        {
          id: 1,
          url: '//img1.qunarzz.com/sight/p0/201403/07/40e1c518ff83efd01349114ea57d5429.jpg_600x330_d3afd741.jpg'
        },
        {
          id: 2,
          url: '//img1.qunarzz.com/sight/p0/1702/ef/eff2db73934ba7b3a3.water.jpg_600x330_09b05fb5.jpg'
        },
        {
          id: 3,
          url: '//img1.qunarzz.com/sight/p0/1510/d0/d0610302e0ae770890.water.jpg_600x330_7a87817c.jpg'
        },
        {
          id: 4,
          url: '//img1.qunarzz.com/sight/p0/1504/ea/ea1547edc307bed5.water.jpg_600x330_d3d44f07.jpg'
        }
      ]
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
