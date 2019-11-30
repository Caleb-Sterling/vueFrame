/*
 * @描述: 
 * @版本: 
 * @作者: sueRimn
 * @Date: 2019-11-28 08:58:08
 * @最后修改人: sueRimn
 * @LastEditTime: 2019-11-30 19:48:33
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
/* eslint-disable */
Vue.config.productionTip = false;
// 全局挂载拦截器
import http from "./untils/interceptor"
Vue.prototype.$http = http;
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
