<template>
<div class='header' >
  <router-link tag="div" to="/" class="header-abs" v-show="showAbs"><Icon type="ios-arrow-back" /></router-link>
  <div
    class="header-fix"
    v-show="!showAbs"
    :style="opacityStyle"
    >
    景点详情
    </div>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.onScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: function () {
      console.log(document.documentElement.scrollTop)
      var top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
        const opacity = top / 140
        this.opacityStyle = {
          opacity: opacity
        }
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang='less' scoped>
.header{
  .header-abs{
    position: absolute;
    top: .2rem;
    left: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: 300;
    background-color: rgba(0,0,0,.7);
    border-radius:50%;
  }
  .header-fix{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: 20px;
    background-color: #00bcd4;
    color: #fff;
  }
}
</style>
