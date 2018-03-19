<template>
   <div class="carousel">
        <transition-group tag='ul' class="clearfix slide" name='image'>
            <!--用动态样式绑定，不用v-show语句 避免会出现中间空缺的那一部分-->
            <li v-for='(image,index) in img' :key='index' :class="{'show':index===mark}" @mouseover="stop" @mouseout="play">
                <a><img :src="image"></a>
            </li>
        </transition-group>
        <div class="bullet">
            <span v-for='(item,index) in img.length' :class="{'active':index===mark}" @click='change(index)'></span>
        </div>
    </div>
</template>
<script>
export default {
  name:"CarouselComponent",
//   3.1.2在子组件用props接收
   data:function(){
       return {
        mark: 0,
        timer: null,
        img: ['http://upload-images.jianshu.io/upload_images/3360875-5625658440cb542d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            'http://upload-images.jianshu.io/upload_images/3360875-b70e9d81d26e2a27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            'http://upload-images.jianshu.io/upload_images/3360875-dc724649454c2ddc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            'http://upload-images.jianshu.io/upload_images/3360875-d2148a1bb7ea9d21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
        ]
       }
    },
    created() {
        this.play()
    },
    methods: {
        change(i) {
            this.mark = i
        },
        autoPlay() {
            // this.mark++
            //     if (this.mark>this.img.length-1) {
            //         this.mark = 0
            //         return
            //     }
            this.timer=setInterval(()=>{
                 this.mark++
                if (this.mark>this.img.length-1) {
                    this.mark = 0
                    return
                }
            },3000)
        },
        play() {
        this.autoPlay();
        },
        stop: function () {
              clearInterval(this.timer);
              this.timer=null;
 
          },
    }
}
</script>
<style>
* {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .clearfix {
            content: '';
            clear: both;
            display: block;
        }
        .carousel {
            width: 100%;
            height: 300px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
        }
        .slide {
            width: 100%;
            height: 300px;
        }
         .slide>li{
             display: none;
         }
          .slide>li.show{
              display: inline-block
          }
        img {
            width: 100%;
            height: 300px;
        }
        .bullet {
            width: 100%;
            position: absolute;
            bottom: 10px;
            margin: 0 auto;
            text-align: center;
            z-index: 10;
        }
         .bullet>span {
            width: 10px;
            height: 10px;
            border: 1px solid;
            border-radius: 50%;
            background: white;
            display: inline-block;
            margin-right: 10px;
        }
        .bullet>.active {
            background: red;
        }
        .image-enter-active {
            transform: translateX(0);
            transition: all 1s ease;
        }       
        .image-leave-active {
            transform: translateX(-100%);
            transition: all 1s ease;
        }
        .image-enter {
            transform: translateX(100%)
        }
        .image-leave {
            transform: translateX(0)
        }
</style>

