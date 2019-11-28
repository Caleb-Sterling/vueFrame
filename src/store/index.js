/*
 * @描述: 
 * @版本: 
 * @作者: sueRimn
 * @Date: 2019-11-28 08:58:08
 * @最后修改人: sueRimn
 * @LastEditTime: 2019-11-28 09:53:00
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''},
  mutations: {},
  actions: {},
  modules: {}
});
