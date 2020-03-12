<template>
  <div class='list' ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>

        <div class="area">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"  v-for='(item, index) in hotCitiesData' :key='index'>
              <div class="button" @click="haha">{{item.name}}</div>
            </div>
          </div>
        </div>

        <div class="area">
            <div class="item-list" v-for='(item, key) of cities' :key="key" :ref="key">
            <div class="title">{{key}}</div>
            <div>
              <div class="item" v-for='(it, idx) in item' :key='idx'>{{it.name}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    hotCitiesData: {
      type: Array
    },
    cities: {
      type: Object
    },
    choosedLetter: {
      type: String
    }
  },
  watch: {
    choosedLetter () {
      const element = this.$refs[this.choosedLetter][0]
      this.scroll.scrollToElement(element)
    }
  },
  methods: {
    haha: function () {
      console.log(1111)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang='less' scoped>
.list{
  overflow: hidden;
  position: absolute;
  top: 79px;
  left: 0;
  bottom: 0;
  right: 0;
  .area{
    .title{
      line-height: .44rem;
      background: #eee;
      padding-left: .3rem;
      border: 1px solid #ccc;
      font-size: .26rem;
    }
    .button-list{
      padding: .1rem .6rem .1rem .1rem;
      overflow: hidden;
      background-color: #fff;
      .button-wrapper{
        width: 33.33%;
        float: left;
        .button{
          text-align: center;
          padding: .1rem 0;
          margin: .1rem;
          border:1px solid  #ccc;
          border-radius: 3px;
        }
      }
    }
    .item-list{
      .item{
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
        border-bottom: 1px solid #dcdee2;
        background-color: #fff;
      }
    }
  }
}
</style>
