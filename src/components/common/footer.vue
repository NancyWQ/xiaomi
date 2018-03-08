<template>
   <footer class="footer clear">
      <div class="footer-item" >
        <p class="icon">
          <span class="iconfont icon-shouye"></span>
        </p>
        <p class="name">首页</p>
      </div>

      <div class="footer-item" >
        <p class="icon">
          <span class="iconfont icon-fenlei"></span>
        </p>
        <p class="name">分类</p>
      </div>

      <div class="footer-item shop-car">
        <p class="icon">
          <span class="iconfont icon-gouwuche"></span>
        </p>
        <p class="name">购物车</p>
        <!--<span class="num" v-show="getShopCarLength > 0" :class="{ 'full': parseInt(getShopCarLength) >= 99 }" >{{ getShopCarLength >= 99 ? '99+' : getShopCarLength }}</span>-->
      </div>

      <div class="footer-item">
        <p class="icon">
          <span class="iconfont icon-xiaolian"></span>
        </p>
        <p class="name">我的</p>
      </div>
    </footer>
</template>
<script>
export default {
  name:"FooterComponent"
}
</script>
<style lang="sass">
@import "../../style/base.sass";
</style>


