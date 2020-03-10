<template>
<div class='home'>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
</div>
</template>

<script>
import HomeHeader from './homeHeader'
import HomeSwiper from './homeSwiper'
import HomeIcons from './homeIcons'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
</style>
