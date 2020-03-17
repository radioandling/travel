<template>
<div class='search'>
  <div class="search-input">
    <input type="text" placeholder="键入城市名" class="input" v-model="keyword">
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item" v-for='(item, index) in  list' :key='index' @click="onChooseCity(item.name)">{{item.name}}</li>
      <li class="search-item no-result" v-if="hasNoData">没有找到相关匹配项目</li>
    </ul>
</div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  components: {},
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        this.showNoResult = false
        const result = []
        for (const k in this.cities) {
          this.cities[k].forEach(item => {
            var condition = item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1
            if (condition) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  props: {
    cities: {
      type: Object
    }
  },
  methods: {
    onChooseCity (city) {
      this.$store.commit('CHANGE_CITY', city)
    }
  }
}
</script>
<style lang='less' scoped>
.search{
  height: .72rem;
  background-color: #00bcd4;
  padding: 0 .2rem;
  .input{
    height: .62rem;
    line-height: .62rem;
    width: 100%;
    border-radius: 3px;
    padding: 0 .2rem;
    color: #777;
  }
  .search-content{
    width: 100%;
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    background-color: rgb(245, 240, 240);
    .search-item{
      color: #666;
      padding-left: .2rem;
      line-height: .6rem;
      height: .6rem;
      border-bottom: .5px solid #ddd;
      background-color: #fff;
    }
    .no-result{
      color: #e64340;
    }
  }
}
</style>
