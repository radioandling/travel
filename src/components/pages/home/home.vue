<template>
<div class='home'>
  <home-header></home-header>
  <home-swiper></home-swiper>
</div>
</template>

<script>
import HomeHeader from './homeHeader'
import HomeSwiper from './homeSwiper'

export default {
  components: {
    HomeHeader,
    HomeSwiper
  },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
</style>
