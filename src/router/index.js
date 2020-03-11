import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '../components/pages/home/home.vue'
import MyCity from '../components/pages/city/city.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myhome',
      component: MyHome
    },
    {
      path: '/city',
      name: 'myCity',
      component: MyCity
    }
  ]
})
