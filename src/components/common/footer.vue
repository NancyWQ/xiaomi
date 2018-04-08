<template>
   <footer class="footer clear">
      <div class="footer-item">
        <!--页面跳转方式1router-link-->
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
        <p class="icon">
          <span class="iconfont icon-gouwuche"></span>
        </p>
        <p class="name">购物车</p>
        <!--<span class="num" v-show="getShopCarLength > 0" :class="{ 'full': parseInt(getShopCarLength) >= 99 }" >{{ getShopCarLength >= 99 ? '99+' : getShopCarLength }}</span>-->
      </div>

      <div class="footer-item">
        <router-link to="/user">
        <p class="icon">
          <span class="iconfont icon-xiaolian"></span>
        </p>
        <p class="name">我的</p>
        </router-link>
      </div>
    </footer>
</template>
<script>
export default {
  name:"footerComponent"
}
</script>
<style lang="sass">
@import "../../style/base.sass";
</style>


