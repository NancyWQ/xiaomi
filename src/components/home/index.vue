<template>
  <div class="app-init home-index">
      <!--1.3引入-->
      <!--2.1.2在父组件中给子组件绑定事件-->
      <HeaderComponent @title="thisTitle"></HeaderComponent>
      <!--用v-if判断显示哪一个 不用动态的样式类 ，因为每一个都不一样-->
      <!--这是推荐-->
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==0">
        <CarouselComponent :showCar="title"></CarouselComponent>
        <div class="nav-mi-tj clear" style="width:100%">
          <a href="javascript:;" class="fl"  style="width:25%;height:100px;">
            <img  src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292984819.png" alt="" style="width:100%;height:100%;">
          </a>
          <a href="javascript:;" class="fl" style="width:25%;height:100px;">
            <img  src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292372054.png" alt="" style="width:100%;height:100%;" >
          </a>
          <a href="javascript:;" class="fl" style="width:25%;height:100px;">
            <img  src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022291629252.png" alt="" style="width:100%;height:100%;">
          </a>
          <a href="javascript:;" class="fl" style="width:25%;height:100px;">
            <img  src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022290460400.png" alt="" style="width:100%;height:100%;">
          </a>
      </div>
      <div class="shop-item clear">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114551289342.png" class="fl href" alt="" style="width:49.5%;margin-bottom: 0.05rem">
        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" class="fr href" style="margin-bottom: 0.05rem;width:49.5%" alt="">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png" class="fl href" alt="" style="width:49.5%">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png" class="fr href" alt="" style="width:49.5%">
      </div>
      <div class="shop-item clear">
        <img   src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg" alt="">
      </div>
      <div class="shop-item clear">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115034174111.png" alt="">
      </div>
      <div class="shop-item clear">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115033089933.png" alt="">
      </div>
      <div class="shop-item">
        <div class="shop-box clear">

          <div class="shop-box-item" v-for="target in shoplist">
            <img :src="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--这是手机-->
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==1">
        <CarouselComponent :showCar="title"></CarouselComponent>
        <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px;">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist">
            <img :src="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>
        </div>
      </div>
      </div>
      <!--这是智能-->
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==2">
       <CarouselComponent  :showCar="title"></CarouselComponent>
       <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist">
            <img :src="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>
        </div>
      </div> 
      </div>
      <!--这是电视-->
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==3">
          <CarouselComponent :showCar="title"></CarouselComponent>
          <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist">
            <img :src="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>
        </div>
      </div>
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==4">
        <CarouselComponent :showCar="title"></CarouselComponent>
        <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist">
            <img :src="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>
        </div>
      </div>
      </div>
      <!--全面屏-->
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==5">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317010732422.png' alt="">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/48ca6cfb19c45e7cbecbd8c34c757445.jpg' alt="">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317012799998.png' alt="">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317013522274.png' alt="">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317005752430.png' alt="">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317011947232.png' alt="">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317014434073.png' alt="">
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==6">
        <CarouselComponent :showCar="title"></CarouselComponent>
         <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist">
            <img :src="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>
        </div>
      </div>
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==7">
         <CarouselComponent :showCar="title"></CarouselComponent>
         <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px;">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist">
            <img :src="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>
        </div>
      </div>
      </div>
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==8">
        <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317154829739.png' alt="">
      <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317155627636.png' alt="">
      <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317160444789.png' alt="">
      <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317161351928.png' alt="">
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
    title:0,
    shoplist:[],
    } 
},
//1.2声明
components: {
    HeaderComponent,FooterComponent,CarouselComponent
  },
  created(){
      this.$http({
            url:`http://localhost:5000/indexList?indexListId=1`,
            method:"get",
        }).then((res)=>{
          console.log(res.data);
          this.shoplist=res.data;
        })
  },
  methods:{
    // 2.1.3定义函数，并进行处理
    thisTitle:function(msg){
      this.title=msg;
       this.$http({
            url:`http://localhost:5000/indexList?indexListId=${msg+1}`,
            method:"get",
        }).then((res)=>{
          console.log(res.data);
          this.shoplist=res.data;
        });
    }
  }
}
</script>
<style lang="sass">
@import "../../style/home.sass";
@import "../../style/base.sass";
</style>



