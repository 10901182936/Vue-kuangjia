import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  routes: [

    //首页
    {
      path: '/',
      component: resolve=> require(['../components/homePage'],resolve)
    },

    //逛逛
    {
      path: '/go',
      component: resolve=> require(['../components/guangPage'],resolve)
    },

    //订单
    {
      path: '/order',
      component: resolve=> require(['../components/orderPage'],resolve)
    },

    //我的
    {
      path: '/user',
      component: resolve=> require(['../components/userPage'],resolve)
    }

  ]
});

export default router;
