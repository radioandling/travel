<template>
<div class='weekend'>
  <div class="hot-sale">周末闲游</div>
  <ul>
    <li class="reco-item" v-for='item in weekData' :key='item.id'>
      <img class="item-img" :src="item.imgUrl">
      <div class="info-wrapper">
        <p class="item-title">{{item.title}}</p>
        <p class="item-detail">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      weekendListData: [
        {
          id: '0001',
          title: '深圳野生动物园',
          desc: '来看看狮子老虎，猴，熊猫，都有哦！',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_350x240_0bc2440f.jpg'
        },
        {
          id: '0002',
          title: '深圳野生动物园',
          desc: '来看看狮子老虎，猴，熊猫，都有哦！',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_350x240_0bc2440f.jpg'
        },
        {
          id: '0003',
          title: '深圳野生动物园',
          desc: '来看看狮子老虎，猴，熊猫，都有哦！',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_350x240_0bc2440f.jpg'
        },
        {
          id: '0004',
          title: '深圳野生动物园',
          desc: '来看看狮子老虎，猴，熊猫，都有哦！',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_350x240_0bc2440f.jpg'
        }
      ]
    }
  },
  props: {
    weekData: {
      type: Array
    }
  }
}
</script>
<style lang='less' scoped>
.weekend{
  .hot-sale{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    background-color: #f8f8f9;
  }
  .reco-item{
    text-align: center;
    height: 5rem;
    margin-bottom: .6rem;
    .item-img{
      width: 100%;
      height: 4rem;
      padding: .1rem;
    }
    .info-wrapper{
      text-align: left;
      height: 1.7rem;
      padding: .1rem;
      .item-title{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: .1rem;
      }
      .item-detail{
        font-size: 14px;
        font-weight: 400;
        color: #888;
        white-space: wrap;
      }
    }
  }
}
</style>
