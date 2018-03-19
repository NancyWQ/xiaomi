<template>
  <div class="app-init home-index">
      <!--1.3引入-->
      <!--2.1.2在父组件中给子组件绑定事件-->
      <HeaderComponent @title="thisTitle"></HeaderComponent>
      <!--用v-if判断显示哪一个 不用动态的样式类 ，因为每一个都不一样-->
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==0">
        <CarouselComponent></CarouselComponent>
        这是推荐
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==1">
        <CarouselComponent></CarouselComponent>
        这是手机
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==2">
        这是智能
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==3">
        这是电视
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==4">
        这是电脑
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==5">
        这是全面屏
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==6">
        这是生活周边
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==7">
        这是盒子
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==8">
        这是艺术
      </div>
      <FooterComponent></FooterComponent>
  </div>
</template>
<script>
// 1引入其他组件的步骤
// 1.1引入
import HeaderComponent from '../common/header'
import FooterComponent from '../common/footer'
import CarouselComponent from '../common/slide'
export default {
name:"HomeComponent",
data:function(){
  return {
    title:0
    } 
},
//1.2声明
components: {
    HeaderComponent,FooterComponent,CarouselComponent
  },
  methods:{
    // 2.1.3定义函数，并进行处理
    thisTitle:function(msg){
      this.title=msg;
      console.log("这是从子元素传过来的"+msg);
    }
  }
}
</script>
<style lang="sass">
@import "../../style/home.sass";
@import "../../style/base.sass";
</style>



