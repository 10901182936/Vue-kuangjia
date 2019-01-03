<style lang='css' scoped>
  .footer-layout-content {
    width:100%;
    height:60px;
    background:#fff;
    position: fixed;
    bottom:0;
  }
  .item-list {
    width:25%;
    height:60px;
    float:left;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .checked {
    color:darkorange;
  }
  .list-content {
    font-size:0.14rem;
    color:#333;
    text-align:center;
  }
  .img-content {
    width:20px;
    height:20px;
    position:relative;
    left:50%;
    transform:translate(-10px);
    background:lightpink;
  }
  .active {
    color:orange;
  }
</style>

<template>
  <div class='footer-layout-content'>
    <ul class='tabar-list-box'>
      <li class='item-list'>
        <router-link to='/'>
          <div class='list-content'>
            <div class='img-content'></div>
            <p class='text-content' :class='active[0]'>首页</p>
          </div>
        </router-link>
      </li>
      <li class='item-list'>
        <router-link to='/go'>
          <div class='list-content'>
            <div class='img-content'></div>
            <p class='text-content' :class='active[1]'>逛逛</p>
          </div>
        </router-link>
      </li>
      <li class='item-list'>
        <router-link to='/order'>
          <div class='list-content'>
            <div class='img-content'></div>
            <p class='text-content' :class='active[2]'>订单</p>
          </div>
        </router-link>
      </li>
      <li class='item-list'>
        <router-link to='/user'>
          <div class='list-content'>
            <div class='img-content'></div>
            <p class='text-content' :class='active[3]'>我的</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        active:['active','','','']
      }
    },
    created(){
      this.$store.state.tabCheck = 1
    },
    methods:{
      //检测当前选中tab
      checkTab(index){
        var arr = this.active
        for(let i in arr){
          arr[i] = ''
        }
        this.active[index] = 'active'
      }
    }
  }
</script>
