<template>
<header class="public-header">
     <div class="search-box clear">
      <i class="icon iconfont icon-xiaomi logo"></i>
      <input type="text" placeholder="搜索商品名称" class="input-controller">
      <i class="icon iconfont icon-xiaolian"></i>
      </div>
      <nav class="menu-box scroll-box-x noscroll">
        <ul class="wrap-box clear">
          <!--动态样式绑定给class-->
          <li class="item"  v-for="(value, index) in title" @click="chooseTitle(index)" :class="{'active':index==navListActiveIndex}">
            <span>{{value}}</span>
          </li>
        </ul>
      </nav>
    </header>
    
</template>
<script>
export default {
  name: 'HeaderComponent',
  data:function(){
            return {
              title:["推荐","手机","智能","电视","电脑","全面屏","生活周边","盒子","艺术"],
              navListActiveIndex:0
            }
        },
  methods:{
    // 选择是那一个题目的函数
    chooseTitle:function(i){
      this.navListActiveIndex=i;
      // 2子组件给父组件传值--方法一
      // 2.1.1使用$emit函数传给父组件
      console.log(i);
       this.$emit('title',i);
    }
  }
}
</script>
<style lang="sass">
  @import "../../style/base.sass";
  @import "../../style/home.sass";
</style>