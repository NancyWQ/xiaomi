<template>
  <div class="app-init home-index">
      <!--1.3引入-->
      <HeaderComponent></HeaderComponent>
      <p>这是中间</p>
      <FooterComponent></FooterComponent>
  </div>
</template>
<script>
// 1引入其他组件的步骤
// 1.1引入
import HeaderComponent from '../common/header'
import FooterComponent from '../common/footer'
export default {
name:"HomeComponent",
//1.2声明
components: {
    HeaderComponent,FooterComponent
  },
}
</script>
<style lang="sass">

</style>


