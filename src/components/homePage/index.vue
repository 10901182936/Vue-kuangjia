<style lang="css" scoped>
  .layout-content {
    text-align: center;
    font-size:0.16rem;
  }
  .content {

  }
</style>

<template>
  <div class='layout-content'>
    <div class='content'>这是首页！</div>
    <div v-for='value in hh'>{{value.id}} {{value.text}} {{value.done}}</div>
    <footerComponent></footerComponent>
  </div>
</template>

<script type="text/ecmascript-6">
  import footerComponent from '@/publicComponents/footerComponent/index'
  import {mapActions,mapGetters} from 'vuex'
  import {ADD_NUM} from '@/store/index'
  export default {
    components:{
      footerComponent
    },
    data(){
      return {

      }
    },
    computed:{
      //1、使用对象展开运算符将 getter 混入 computed 对象中
//      ...mapGetters(['doneTodos']),
      //2、重新命名并映射到对应的getters下的方法
      ...mapGetters({
          hh:'doneTodos'
        })
      //3、直接访问
//        doneTodos(){
//          return this.$store.getters.doneTodos
//        }
    },
    beforeMount(){
      this.$store.state.tabCheck = 1
      this.init()
//      this.$store.commit('increment')
//      console.log(this.$store.getters.doneTodos)
//      console.log(this.$store.state.count) // -> 1
    },
    methods:{
      ...mapActions([ADD_NUM]),

      init (){
        var that = this
        that.ADD_NUM()
        console.log(this.$store.state.count)
        console.log(this.hh)
      }
    }

  }
</script>
