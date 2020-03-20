/* eslint-disable no-undef */
<template>
<div class='detail'>
  <my-banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :bannerImgs="gallaryImgs"
    >
    </my-banner>
  <my-header></my-header>
  <div class="content">
    <my-list :list="list"></my-list>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import MyBanner from './banner'
import MyHeader from './header'
import MyList from './list'
export default {
  name: 'Detail',
  components: {
    MyBanner,
    MyHeader,
    MyList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  mounted () {
    this.getDetailData()
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json?' + this.$route.params.id)
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            console.log(res)
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        })
    }
  }
}
</script>
<style lang='less' scoped>
.content{
  height: 2000px;
}
</style>
