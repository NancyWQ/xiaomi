import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import HelloWorld from '@/components/HelloWorld'
// 测试
import HeaderComponent from '@/components/common/header'
import FooterComponent from '@/components/common/footer'
import CarouselComponent from '@/components/common/slide'
import HomeComponent from '@/components/home/index'
import UserIndexComponent from '@/components/user/index'
import divideComponent from '@/components/divide/index'
Vue.use(Router)
Vue.use(VueAwesomeSwiper)

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
      path: '/slide',
      name: 'CarouselComponent',
      component: CarouselComponent
    },
     {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/user',
      name: 'UserIndexComponent',
      component: UserIndexComponent
    },
    {
       path: '/divide',
      name: 'divideComponent',
      component: divideComponent
    }
  ]
})
