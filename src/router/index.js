import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '../components/pages/home/home.vue'
import MyList from '../components/pages/list/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myhome',
      component: MyHome
    },
    {
      path: '/list',
      name: 'mylist',
      component: MyList
    }
  ]
})
