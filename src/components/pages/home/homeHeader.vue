<template>
<div class='header'>
  <Icon class="header-left" type="ios-arrow-back" />
  <Input class="header-middle" search placeholder="键入城市名" />
  <router-link to="/city">
    <div class="header-right">
      <span>{{this.$store.state.city}}</span>
      <Icon type="ios-arrow-down" />
    </div>
  </router-link>
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
  width: 100%;
  height: .86rem;
  background-color: #00bcd4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .2rem;

  .header-left{
    font-size: 20px;
    font-weight: 300;
    color: #fff;
  }
  .header-middle{
    width: 72%;
  }
  .header-right{
    color: #fff;
  }
}
</style>
