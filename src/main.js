import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
import './assets/styles/iconfont.css'
import '../node_modules/view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(ViewUI)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
