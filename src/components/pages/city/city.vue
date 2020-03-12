<template>
<div class='city'>
  <city-header></city-header>
  <city-search :cities="cities"></city-search>
  <city-list :hotCitiesData="hotCitiesData" :cities="cities" :choosedLetter="choosedLetter"></city-list>
  <city-alpha :cities="cities" @change="changeAlpha"></city-alpha>
</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './cityHeader'
import CitySearch from './citySearch'
import CityList from './cityList'
import CityAlpha from './cityAph'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlpha
  },
  data () {
    return {
      hotCitiesData: [],
      cities: {},
      alphas: [],
      choosedLetter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(res => {
          var result = res.data.data
          console.log('hah===>', result)
          this.hotCitiesData = result.hotCities
          this.cities = result.cities
        })
    },
    changeAlpha (letter) {
      this.choosedLetter = letter
    }
  }
}
</script>
<style lang='less' scoped>
</style>
