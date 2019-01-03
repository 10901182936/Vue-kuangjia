import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css';
import 'normalize.css'

import axios from './http' //axios http请求配置
Vue.prototype.$http = axios;

import util from'./js/util' //公共方法
Vue.prototype.util=util;

import Vuex from 'vuex'
Vue.use(Vuex)

import store from './store/index'

import VueScroller from 'vue-scroller' //下拉刷新，上拉加载更多
Vue.use(VueScroller)

import ElementUI from 'element-ui'
Vue.use(ElementUI)

// import './assets/css/style.css'
import './assets/ico/iconfont.css'         //字体图标
import './less/index.less'
import './less/common.less'
import './less/iview.less';   //iview自定义过的主题样式

axios.defaults.withCredentials = true;

import iview from 'iview'
Vue.use(iview);

import validate,{ config } from './config/vee-validate';//表单验证插件配置
Vue.use(validate,config);

import valRule from'./config/valRule' //iview表单async-validator规则
Vue.prototype.$valRule=valRule;

import filters from'./config/filters' //过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
