<template>
<div class='gallery' @click="onCloseGallary">
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for='(item, index) in imgsData' :key='index'>
        <img class="swiper-item-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>

export default {
  components: {
  },
  props: {
    imgsData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    onCloseGallary () {
      this.$emit('onCloseGallary')
    }
  }
}
</script>
<style lang='less' scoped>
.gallery{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index:99;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  .swiper{
    width: 100%;
    height: 220px;
    .swiper-item-img{
      width: 100%;
    }
    .swiper-pagination{
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
