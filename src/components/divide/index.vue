<template>
  <div class="app-init classification">
     <div class="classification-header">
      <HeaderBackComponent title="分类"></HeaderBackComponent>
    </div>
    <div class="wrap-box">
       <div class="left-menu absolute scroll-box" ref="left">
        <ul>
          <li class="item" v-for="(target, index) in dataItem" :class="{ 'active': index == active }" @click="changeNav(index)">{{target.name}}</li>
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
                  <p><img :src="shop.src" alt="index" @click="navigatorToDetail(shop.detail_id)"></p>
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
     distance:[],
       active: 0,
        dataItem: [
          {
            name: '新品',
            children: []
          },
          {
            name: '手机',
            children: []
          },
          {
            name: '电视',
             children: []
          },
          {
            name: '电脑',
             children: []
          },
          {
            name: '家电',
             children: []
          },
          {
            name: '路由',
             children: []
          },
          {
            name: '智能',
            children: []
          },
          {
            name: '电源',
             children: []
          },
          {
            name: '耳机',
            children: []
          },
          {
            name: '音箱',
            children: []
          },
          {
            name: '礼品',
             children: []
          },
          {
            name: '生活',
            children: []
          },
          {
            name: '米粉卡',
            children: []
          },
          {
            name: '零售店',
             children: []
          }
        ],
   }
 },
 methods:{
   changeNav(num){
     this.active=num;
    //  不要用生命周期函数 可能会拿不到正确的值
     let li=this.$refs.rightView.childNodes[0].childNodes;
     for(let item of li){
       let scroll=item.offsetTop;
       this.distance.push(scroll);
     }
     this.$refs.rightView.scrollTop = this.distance[num];
   },
   navigatorToDetail(num){
     this.$router.push(`/detail/${num}`)
   }
 },
 created(){
   let _this=this;
   _this.$http({
            url:`http://localhost:5000/indexDivided`,
            method:"get",
        }).then((res)=>{
            for(let item of res.data){
              switch(item.group){
                case "新品":_this.dataItem[0].children.push(item);
                break;
                case "手机":_this.dataItem[1].children.push(item);
                break;
                case "电视":_this.dataItem[2].children.push(item);
                break;
                case "电脑":_this.dataItem[3].children.push(item);
                break;
                case "家电":_this.dataItem[4].children.push(item);
                break;
                case "路由":_this.dataItem[5].children.push(item);
                break;
                case "智能":_this.dataItem[6].children.push(item);
                break;
                case "电源":_this.dataItem[7].children.push(item);
                break;
                case "耳机":_this.dataItem[8].children.push(item);
                break;
                case "音响":_this.dataItem[9].children.push(item);
                break;
                case "礼品":_this.dataItem[10].children.push(item);
                break;
                case "生活":_this.dataItem[11].children.push(item);
                break;
                case "米粉卡":_this.dataItem[12].children.push(item);
                break;
                case "零售店":_this.dataItem[13].children.push(item);
                break;
              }
            }
        })
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


