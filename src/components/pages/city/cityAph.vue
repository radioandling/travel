<template>
<div class='alpha'>
  <ul class="alpha-list">
    <li
      class="item"
      v-for='item of letters'
      :key="item"
      @click="chooseAlpha"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      :ref="item"
      >{{item}}</li>

  </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components: {},
  data () {
    return {
      touchState: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (const key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  props: {
    cities: Object
  },
  methods: {
    chooseAlpha (e) {
      console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    touchStart () {
      this.touchState = true
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    touchMove (e) {
      if (this.touchState) {
        console.log(this.$refs)
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.round((touchY - startY) / 20) - 1
        console.log(index)
        console.log(index >= 0 && index <= this.letters.length)
        if (index >= 0 && index <= this.letters.length) {
          console.log(111)
          this.$emit('change', this.letters[index])
        }
      }
    },
    touchEnd () {
      this.touchState = false
    }
  }
}
</script>
<style lang='less' scoped>
.alpha{
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item{
    text-align: center;
    color: #00bcd4;
    line-height: 20px;
  }
}
</style>
