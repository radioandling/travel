<template>
<div class='header'>
  <router-link to="/">
    <Icon type="md-arrow-back" class="icon"/>
  </router-link>
  城市选择
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
.header{
  height: .86rem;
  line-height: .86rem;
  overflow: hidden;
  text-align: center;
  background-color: #00bcd4;
  color: #fff;
  font-size: .3rem;
  font-weight: 500;
  position: relative;
  .icon{
    font-size: 20px;
    position: absolute;
    left: 3%;
    top: 25%;
    color: #fff;
  }
}
</style>
