<template>
<div  class="app-init home-index">
  <div class=" scroll-box mine-page footer-hack">
      <div class="user-box public-padding">
      <div class="face-book">
        <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/normal-face.png" alt="">
      </div>
      <p class="fl"> 登录 /  注册 </p>
    </div>
    <div class="dingdan public-padding p-item">
      我的订单
    </div>
    <div class="tab-box clear">
      <div class="item">
        <p class="icon">
          <span class="iconfont icon-daifukuan" style="font-size:35px;"></span>
        </p>
        <p class="name">待付款</p>
      </div>
      <div class="item">
        <p class="icon">
          <span class="iconfont icon-daishouhuo" style="font-size:35px;"></span>
        </p>
        <p class="name">待收货</p>
      </div>
      <div class="item">
        <p class="icon">
          <span class="iconfont icon-tuihuanhuo" style="font-size:35px;"></span>
        </p>
        <p class="name">退换修</p>
      </div>
    </div>
      <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon-huiyuan" style="color: #FDBF2D;"></span>
        <span>会员福利</span>
      </div>
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon-daifukuan" style="color: #51BBE0;"></span>
        <span>我的优惠</span>
      </div>
    </div>
    <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon-fuwuerji" style="color: #F96C5E;"></span>
        <span>服务中心</span>
      </div>
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon-store" style="color: #FF8B43;"></span>
        <span>小米之家</span>
      </div>
    </div>
    <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon-shezhi" style="color: #818C99;"></span>
        <span>设置</span>
      </div>
    </div>
  </div>
  <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import FooterComponent from '../common/footer'
export default {
  name:"UserIndexComponent",
  components:{
  FooterComponent
},
}
</script>
<style lang="sass">
@import "../../style/home.sass";
@import "../../style/base.sass";
.mine-page
    .public-padding
      padding: 0 getIphonese(30px)

    .user-box
      height: getIphonese(142px)
      background: #f37d0f url(http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/bg.63c8e19.png) repeat top center
      background-size: 7.7rem
      @include box-sizing
      padding-top: getIphonese(28px)
      padding-bottom: getIphonese(28px)

    .user-box
      line-height: 1.33rem
      .face-book
        width: 1.33rem
        height: 1.33rem
        float: left
        border-radius: 100%
        border: 3px solid hsla(0,0%,100%,.4)
        overflow: hidden
        @include box-sizing
        img
          width: 100%
          height: 100%
      p
        padding-left: 0.2rem
        color: #fff
        @include f12px

    .dingdan
      line-height: getIphonese(80px)
    .p-item:active
      background-color: #eee
    .p-item
      background-color: #fff
      color: rgba(0,0,0,.87)
      position: relative
      border-bottom: 1px solid #D9D9D9
    .p-item:after
      font-family: 'iconfont'
      content: ">"
      position: absolute
      right: getIphonese(26px)
      color: #777777
    .new-wrap
      background-color: #fff
      margin-bottom: 0.26rem
      .p-item
        position: relative
        border-bottom: none
        padding-left: 1.5rem
        @include f12px
      .p-item:before
        position: absolute
        content: ''
        display: block
        width: 8.44rem
        right: 0px
        bottom: 0px


        border-bottom: 1px solid #D9D9D9
      .p-item:last-child:before
        border-bottom: none

      .iconfont
        font-size: 0.65rem
        width: 2rem
        display: inline-block
        text-align: center
        position: absolute
        left: -0.1rem

    .tab-box
      background-color: #fff
      margin-bottom: 0.26rem
      .item
        float: left
        width: 33.3%
        text-align: center
        height: 2.32rem
        .icon
          font-size: 0.6rem
          color: #A4A4A4
          padding-top: 0.36rem
          box-sizing: border-box
        .name
          @include f12px
          padding-top: 0.1rem
      .item:active
        background-color: #eee
</style>


