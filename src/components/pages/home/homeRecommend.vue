<template>
<div class='recommend'>
  <div class="hot-sale">热销推荐</div>
  <ul>
    <router-link tag="li" class="reco-item" v-for='item in recoData' :key='item.id' :to="'/detail/' + item.id">
      <div class="img-wrapper">
        <img class="item-img" :src="item.imgUrl">
      </div>
      <div class="info-wrapper">
        <p class="item-title">{{item.title}}</p>
        <p class="item-detail">{{item.desc}}</p>
        <button class="item-button">查看详情 >></button>
      </div>
    </router-link>
  </ul>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      recommendListData: [
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
    recoData: {
      type: Array
    }
  }
}
</script>
<style lang='less' scoped>
.recommend{
  .hot-sale{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    background-color: #f8f8f9;
  }
  .reco-item{
    display: flex;
    overflow: hidden;
    height: 1.9rem;
    position: relative;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .info-wrapper{
      height: 1.7rem;
      padding: .1rem;
      .item-title{
        font-size: 14px;
        font-weight: 600;
        margin-bottom: .1rem;
      }
      .item-detail{
        font-size: 12px;
        font-weight: 400;
        color: #888;
        white-space: wrap;
      }
      .item-button{
        background-color: #fff;
        position: absolute;
        font-size: 12px;
        color: #5cadff;
        right: .2rem;
        bottom: .2rem;
      }
    }
  }
}
</style>
