<template>
<div class='home'>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-reco></home-reco>
  <home-week></home-week>
</div>
</template>

<script>
import HomeHeader from './homeHeader'
import HomeSwiper from './homeSwiper'
import HomeIcons from './homeIcons'
import HomeReco from './homeRecommend'
import HomeWeek from './weekend'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeReco,
    HomeWeek
  },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
</style>
