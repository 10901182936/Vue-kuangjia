<style lang="css" scoped>
  .layout-content {
    text-align: center;
    font-size:0.16rem;
  }
</style>

<template>
  <div class='layout-content'>
    这里是我的！
    <footerComponent></footerComponent>
  </div>
</template>

<script type="text/ecmascript-6">
  import footerComponent from '@/publicComponents/footerComponent/index'
  export default {
    components:{
      footerComponent
    },
    data(){
      return {

      }
    }
  }
</script>
