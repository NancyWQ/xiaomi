<template>
   <!--<footer class="footer clear">
      <div class="footer-item">
        <router-link to="/">
        <p class="icon">
          <span class="iconfont icon-shouye"></span>
        </p>
        <p class="name">首页</p>
        </router-link>
      </div>

      <div class="footer-item" >
        <router-link to='/divide'>
        <p class="icon">
          <span class="iconfont icon-fenlei"></span>
        </p>
        <p class="name">分类</p>
        </router-link>
      </div>

      <div class="footer-item shop-car">
        <router-link to='/cart'>
        <p class="icon">
          <span class="iconfont icon-gouwuche"></span>
        </p>
        <p class="name">购物车</p>
        </router-link>
      </div>

      <div class="footer-item">
        <router-link to="/user">
        <p class="icon">
          <span class="iconfont icon-xiaolian"></span>
        </p>
        <p class="name">我的</p>
        </router-link>
      </div>
    </footer>-->
    <footer  class="footer clear">
      <div class="footer-item"  v-for="(temp,index) in navList" :class="{'shop-car':index==2}" @click="changeNav(index)">
        <router-link :to="temp.router">
        <p class="icon">
          <span class="iconfont" :class="[temp.icon,{'active':index==navIndex}]"></span>
        </p>
        <p class="name" :class="{'active':index==navIndex}">{{temp.title}}</p>
        </router-link>
      </div>
    </footer>
</template>
<script>
export default {
  name:"footerComponent",
  data(){
    return {
      navIndex:0,
        navList:[{
          router:"/",
          icon:"icon-shouye",
          title:"首页"
        },{
          router:"/divide",
          icon:"icon-fenlei",
          title:"分类"
        },{
          router:"/cart",
          icon:"icon-gouwuche",
          title:"购物车"
        },{
          router:"/user",
          icon:"icon-xiaolian",
          title:"我的"
        }]
    }
  },
  methods:{
    changeNav:function(num){
      console.log(num)
      let _this=this;
      _this.navIndex=num;
    }
  }
}
</script>
<style lang="sass">
@import "../../style/base.sass";
.name
  color:#9999B3
.active
  color: #ff6700 !important
</style>


