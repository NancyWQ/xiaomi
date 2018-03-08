import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 测试
import HeaderComponent from '@/components/common/header'
import FooterComponent from '@/components/common/footer'
import HomeComponent from '@/components/home/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'HeaderComponent',
      component: HeaderComponent
    },
    {
      path: '/footer',
      name: 'FooterComponent',
      component: FooterComponent
    },
     {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    }
  ]
})
