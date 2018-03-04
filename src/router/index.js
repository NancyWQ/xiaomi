import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeHeaderComponent from '@/components/home/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeHeaderComponent',
      component: HomeHeaderComponent
    }
  ]
})
