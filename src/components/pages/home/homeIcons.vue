<template>
<div class='icons'>
   <swiper :options="swiperOption">
    <swiper-slide class="swiper-wrapper">
      <div class="icons-item" style="text-align:center" v-for='(item, index) in iconsData1' :key='index'>
        <img class="icons-img" :src="item.imgUrl">
        <div>{{item.desc}}</div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-wrapper">
      <div class="icons-item" style="text-align:center" v-for='(item, index) in iconsData2' :key='index'>
        <img class="icons-img" :src="item.imgUrl">
        <div class="icons-title">{{item.desc}}</div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false
      }
    }
  },
  props: {
    iconsData: {
      type: Array
    }
  },
  computed: {
    iconsData1 () {
      const iconsData1 = []
      console.log(this.iconsData)
      this.iconsData.filter((item, index) => {
        if (index <= 7) {
          iconsData1.push(item)
        }
      })
      return iconsData1
    },
    iconsData2 () {
      const iconsData2 = []
      console.log(this.iconsData)
      this.iconsData.filter((item, index) => {
        if (index > 7) {
          iconsData2.push(item)
        }
      })
      return iconsData2
    }
  }
}
</script>
<style lang='less' scoped>
.icons{
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  .swiper-wrapper{
    display: flex;
    flex-wrap: wrap;
    .icons-item{
      margin: .3rem 0;
      width: 25%;
      font-size: 10px;
      .icons-img{
      width: 1rem;
      height: 1rem;
      }
    }
  }
}
</style>
