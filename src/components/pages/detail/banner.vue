<template>
  <div>
    <div class='banner' @click="onShowGallary">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1912/8e/8e363c082affa93da3.water.jpg_600x330_c667e998.jpg">
      <div class="banner-info">
        <div class="info-number"><Icon type="ios-eye-outline" />32</div>
        <div class="info-title">深圳欢乐谷(AAAAA景区)</div>
      </div>
    </div>
    <comm-gallary :imgsData="imgsData" v-show="showGallary" @onCloseGallary="onGallaryClose"></comm-gallary>
  </div>
</template>

<script>
import CommGallary from '../../common/commGallery'
export default {
  components: {
    CommGallary
  },
  data () {
    return {
      imgsData: [
        'http://img1.qunarzz.com/sight/p0/1912/1a/1a0f53ba94eff149a3.water.jpg_r_800x800_56d4b071.jpg',
        'http://img1.qunarzz.com/sight/p0/1503/c8/c8462724875d7ded.water.jpg_r_800x800_b905e25f.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    onShowGallary () {
      this.showGallary = true
    },
    onGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang='less' scoped>
.banner{
  position: relative;
  border: 1px solid salmon;
  .banner-img{
    width: 100%;
  }
  .banner-info{
    color: white;
    font-weight: 500;
    position: absolute;
    top: 130px;
    left: 20px;
    font-size: 14px;
  }
}
</style>
