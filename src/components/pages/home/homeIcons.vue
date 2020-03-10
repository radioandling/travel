<template>
<div class='icons'>
   <swiper :options="swiperOption">
    <swiper-slide class="swiper-wrapper">
      <div class="icons-item" style="text-align:center" v-for='(item, index) in iconsData1' :key='index'>
        <img class="icons-img" :src="item.imgUrl">
        <div>{{item.title}}</div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-wrapper">
      <div class="icons-item" style="text-align:center" v-for='(item, index) in iconsData2' :key='index'>
        <img class="icons-img" :src="item.imgUrl">
        <div class="icons-title">{{item.title}}</div>
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
      iconsData: [
        {
          title: '景点门票',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
        },
        {
          title: '深圳必游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          title: '夜场狂欢',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png'
        },
        {
          title: '世界职场',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/815c90e59498644296e340c815e1269a.png'
        },
        {
          title: '一日游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          title: '深圳动物园',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png'
        },
        {
          title: '泡温泉',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'
        },
        {
          title: '东部华侨城',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
        },
        {
          title: '高空观景',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
        },
        {
          title: '玩转长隆',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'
        }
      ],
      iconsData1: [],
      iconsData2: [],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false
      }
    }
  },
  mounted () {
    // 小于8的项目添加到iconsData1，把大于8的项目添加到iconsData2中
    this.iconsData.forEach((item, index) => {
      index > 7 ? this.iconsData2.push(item) : this.iconsData1.push(item)
    })
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
