<template>
<div class='search'>
  <input type="text" placeholder="请输入城市名">
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
.search{
  height: .86rem;
  background-color: #00bcd4;
  line-height: .86rem;
  text-align: center;
  input{
    width: 90%;
    height: .6rem;
    border-radius: 3px;
    padding: 0 .2rem;
    box-sizing: border-box;
  }
}
</style>
