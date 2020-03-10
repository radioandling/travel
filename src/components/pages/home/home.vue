<template>
<div class='home'>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-reco></home-reco>
</div>
</template>

<script>
import HomeHeader from './homeHeader'
import HomeSwiper from './homeSwiper'
import HomeIcons from './homeIcons'
import HomeReco from './homeRecommend'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeReco
  },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
</style>
