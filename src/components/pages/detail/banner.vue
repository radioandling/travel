<template>
  <div>
    <div class='banner' @click="onShowGallary">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="info-number"><Icon type="ios-eye-outline" />32</div>
        <div class="info-title">深圳欢乐谷(AAAAA景区)</div>
      </div>
    </div>
    <comm-gallary :imgsData="bannerImgs" v-show="showGallary" @onCloseGallary="onGallaryClose"></comm-gallary>
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
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
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
