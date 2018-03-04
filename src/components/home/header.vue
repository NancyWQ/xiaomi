<template>
<div>
 <div>
      <i class="icon iconfont icon-xiaomi"></i>
      <input type="text" placeholder="搜索商品名称">
      <i class="icon iconfont icon-xiaolian"></i>
      </div>
      <ul>
          <li v-for="tmp in title">{{tmp}}</li>
      </ul>
</div>
</template>
<script>
export default {
  name: 'HomeHeaderComponent',
  data(){
            return {title:["推荐","手机","智能","电视","电脑","全面屏","生活周边"]}
        }
}
</script>