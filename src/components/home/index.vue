<template>
  <div class="app-init home-index">
      <!--1.3引入-->
      <!--2.1.2在父组件中给子组件绑定事件-->
      <HeaderComponent @title="thisTitle"></HeaderComponent>
      <!--用v-if判断显示哪一个 不用动态的样式类 ，因为每一个都不一样-->
      <!--这是推荐-->
      <div class="scroll-box tab-box mi-tj footer-hack" v-if="title==0">
        <CarouselComponent></CarouselComponent>
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
        <CarouselComponent></CarouselComponent>
        <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px;">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist01">
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
       <CarouselComponent></CarouselComponent>
       <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist02">
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
          <CarouselComponent></CarouselComponent>
          <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist03">
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
        <CarouselComponent></CarouselComponent>
        <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist04">
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
        <CarouselComponent></CarouselComponent>
         <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist06">
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
         <CarouselComponent></CarouselComponent>
         <div class="shop-item">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="" style="height:100px;">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist07">
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
    shoplist : [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          }
        ],
        shoplist01: [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          }
        ],
        shoplist02: [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          }
        ],
        shoplist03: [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          }
        ],
        shoplist04: [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          }
        ],
        shoplist06: [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1015'
          }
        ],
        shoplist07: [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          }
        ]
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



