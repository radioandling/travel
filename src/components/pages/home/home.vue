<template>
<div class='home'>
  <home-header></home-header>
  <home-swiper :swiperData="swiperData"></home-swiper>
  <home-icons :iconsData="iconsData"></home-icons>
  <home-reco :recoData="recoData"></home-reco>
  <home-week :weekData="weekData"></home-week>
</div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './homeHeader'
import HomeSwiper from './homeSwiper'
import HomeIcons from './homeIcons'
import HomeReco from './homeRecommend'
import HomeWeek from './homeWeekend'
import { mapState } from 'vuex'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeReco,
    HomeWeek
  },
  data () {
    return {
      swiperData: [],
      iconsData: [],
      recoData: [],
      weekData: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
    }
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json?city=' + this.city).then(res => {
        this.swiperData = res.data.data.swiperList
        this.iconsData = res.data.data.iconList
        this.recoData = res.data.data.recommendList
        this.weekData = res.data.data.weekendList
      })
    }
  }
}
</script>
<style lang='less' scoped>
</style>
