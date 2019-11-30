/*
 * @描述: 拦截器
 * @版本: v1.0
 * @作者: Stefan
 * @Date: 2019-11-28 09:43:55
 * @最后修改人: Stefan
 * @LastEditTime: 2019-11-30 19:55:00
 */
import axios from 'axios';
import store from '../store'
// http request 拦截器
axios.interceptors.request.use(
    config => {
      if(config.url =="http://192.168.22.52:8081/auth-web/access/login"){
        return config;
      }else{
        if (store.state.Authorization) { //判断token是否存在
        //   config.headers.Authorization =getCookie();  //将token设置成请求头
         }
        return config;
      }
      
    },
    err => {
      return Promise.reject(err);
    }
  );
  
  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      if (response.data.errno === 999) {
        // router.replace('/');
        // console.log("token过期");
      }
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );


  /**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
// const errorHandle = (status, other) => {
//     // 状态码判断
//     switch (status) {
//         // 401: 未登录状态，跳转登录页
//         case 401:
//             toLogin();
//             break;
//         // 404请求不存在
//         case 404:
//             message.error('请求的资源不存在',5);
//             break;
//         default:
//             console.log(other);
//     }};
 
  export default axios;