<template>
<div class='header'>
  <div class="header-top">
    <router-link to="/">
      <Icon type="ios-arrow-back" class="icon-back"/>
    </router-link>
    <ButtonGroup size="large">
      <Button class="btn-item" :class="{'btn-active': active}" @click="chageRegion">国内</Button>
      <Button class="btn-item" :class="{'btn-active': !active}" @click="chageRegion">境外</Button>
    </ButtonGroup>
  </div>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      active: true
    }
  },
  methods: {
    chageRegion () {
      this.active = !this.active
    }
  }
}
</script>
<style lang='less' scoped>
.header{
  background-color: #00bcd4;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  color: #fff;
  position: relative;
  .icon-back{
    font-size: 20px;
    position: absolute;
    left: 3%;
    bottom: 25%;
    color: #fff;
  }
  .btn-item{
    width: 120px;
    height: .6rem;
    background-color: #00bcd4;
    color: #fff;
    border-color: #fff;
  }
  .btn-active{
    background-color: aliceblue;
    border-color: #00bcd4;
    color: #888;
  }
}

</style>
