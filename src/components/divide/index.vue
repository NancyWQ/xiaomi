<template>
  <div class="app-init classification">
     <div class="classification-header">
      <HeaderBackComponent title="分类"></HeaderBackComponent>
    </div>
    <div class="wrap-box">
       <div class="left-menu absolute scroll-box" ref="left">
        <ul>
          <li class="item" v-for="(target, index) in dataItem" :class="{ 'active': index == active }">{{target.name}}</li>
        </ul>
      </div>
       <div class="right-box absolute scroll-box" ref="rightView">
          <ul>
            <li class="item" v-for="(target, index) in dataItem">
              <p class="title">
                <span>{{target.name}}</span>
              </p>
              <div class="shop-item-wrap clear">
                <div class="shop-item" v-for="(shop,index) in target.children">
                  <p><img :src="shop.src" alt="index"></p>
                  <p class="name">{{shop.name}}</p>
                </div>
              </div>
            </li>
        </ul>
       </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderBackComponent from '../common/header-back'
import FooterComponent from '../common/footer'
export default {
 name:"divideComponent" ,
 components:{
   HeaderBackComponent,
   FooterComponent
 },
 data(){
   return{
       active: 0,
        dataItem: [
          {
            name: '新品',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },{
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '手机',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '电视',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '电脑',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '家电',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '路由',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '智能',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '电源',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '耳机',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '音箱',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '礼品',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '生活',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '米粉卡',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '零售店',
            children: [
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          }
        ],
   }
 }
}
</script>
<style type="text/sass" lang="sass">
  @import "../../style/base.sass";
  .classification
    background-color: #fff

    .wrap-box
      position: absolute
      width: 100%
      top: getIphonese(100px)
      left: 0px
      bottom: $footerHeight
      .scroll-box
        height: 100%;
        overflow-x: hidden

    .left-menu
      width: getIphonese(133px)
      left: 0px
      top: 0px
      bottom: 0px
      border-right: 1px solid #efefef
      overflow-x: hidden
      @include box-sizing

      ul
        padding-bottom: 0.44rem
      li.item
        margin-top: getIphonese(56px)
        text-align: center
        -webkit-transition: all .1s ease
        transition: all .1s ease
      li.item.active
        color: #fb7d34
        transform: scale(1.2)
    .right-box
      left: getIphonese(133px)
      top: 0px
      right: 0px
      bottom: 0px
      .item
        padding-top: 0.8rem
      .title
        text-align: center
        padding-bottom: 0.2rem
        span
          position: relative
          display: inline-block

          &:after,&:before
            display: inline-block
            width: getIphonese(34px)
            height: 1px
            top: 50%
            background-color: #e0e0e0
            position: absolute
            content: ''
          &:after
            left: getIphonese(-50px)
          &:before
            right: getIphonese(-50px)
      .shop-item-wrap
        .shop-item
          text-align: center
          float: left
          width: 33.3%
          color: #757575
          margin-bottom: 0.1rem
          @include f12px
          img
            width: getIphonese(80px)
            padding-bottom: 0.1rem
            height: 75px;
</style>


