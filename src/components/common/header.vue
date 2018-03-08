<template>
<header class="public-header">
     <div class="search-box clear">
      <i class="icon iconfont icon-xiaomi logo"></i>
      <input type="text" placeholder="搜索商品名称" class="input-controller">
      <i class="icon iconfont icon-xiaolian"></i>
      </div>
      <nav class="menu-box scroll-box-x noscroll">
        <ul class="wrap-box clear">
          <li class="item"  v-for="(value, index) in title">
            <span>{{value}}</span>
          </li>
        </ul>
      </nav>
    </header>
    
</template>
<script>
export default {
  name: 'HeaderComponent',
  data(){
            return {title:["推荐","手机","智能","电视","电脑","全面屏","生活周边","盒子","艺术"]}
        }
}
</script>
<style lang="sass">
  @import "../../style/base.sass";
  @import "../../style/home.sass";
</style>