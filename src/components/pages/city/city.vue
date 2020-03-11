<template>
<div class='city'>
  <city-header></city-header>
  <city-search></city-search>
</div>
</template>

<script>
import CityHeader from './cityHeader'
import CitySearch from './citySearch'

export default {
  components: {
    CityHeader,
    CitySearch
  },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
</style>
