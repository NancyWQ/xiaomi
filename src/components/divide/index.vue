<template>
  <div>
     <div class="classification-header">
      <HeaderBackComponent title="分类"></HeaderBackComponent>
    </div>
    <div class="wrap-box">
       这是主体
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
 }
}
</script>
<style>

</style>


