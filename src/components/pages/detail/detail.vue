<template>
<div class='detail'>
  <my-banner></my-banner>
  <my-header></my-header>
  <div class="content">
    <my-list :list="list"></my-list>
  </div>
</div>
</template>

<script>
import MyBanner from './banner'
import MyHeader from './header'
import MyList from './list'
export default {
  components: {
    MyBanner,
    MyHeader,
    MyList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [{
                title: '成人票三馆联票 - 某连锁店销售'
              }]
            },
            {title: '成人五馆联票'}
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
.content{
  height: 2000px;
}
</style>
