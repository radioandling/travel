<template>
<div class='list'>
  <div class="item" v-for='(item, index) in list' :key='index'>
    <div class="item-title">
      <span class="item-title-icon"></span>
      {{item.title}}
    </div>
    <div v-if="item.children" class="item-childrem">
      <my-list :list="item.children"></my-list>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'MyList',
  components: {},
  data () {
    return {}
  },
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang='less' scoped>
.list{
  .item{
    .item-title{
      margin-top: .2rem;
      line-height: .8remx;
      font-size: .32rem;
      padding: 0 .2rem;
      border-bottom: .5px solid #ccc;
      .item-title-icon{
        vertical-align: middle;
        display: inline-block;
        width: .36rem;
        height: .36rem;
        top: .26rem;
        left: .2rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
      }
    }
    .item-childrem{
      padding: 0px .2rem;
      box-sizing: border-box;
    }
  }
}
</style>
