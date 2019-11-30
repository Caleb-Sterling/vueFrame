/*
 * @描述: 
 * @版本: 
 * @作者: sueRimn
 * @Date: 2019-11-28 08:58:08
 * @最后修改人: sueRimn
 * @LastEditTime: 2019-11-30 19:55:57
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

// //路由守卫
router.beforeEach((to, from, next)  => {
  if(from.name == "Login"){ // 如果不需要权限校验，直接进入路由界面
    next();
  }else if(to.meta.requireAuth){
    // 判断该路由是否需要登录权限
    if (store.state.Authorization) {  // 获取当前的token是否存在
      // console.log("token存在");
      next();
    } else {
      // console.log("token不存在");
      next({
        path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  }else { // 如果不需要权限校验，直接进入路由界面
    next();
  }
});



export default router;
