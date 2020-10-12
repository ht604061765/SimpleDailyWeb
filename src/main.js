import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Router from 'vue-router'
import iView from 'iview'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Router);
Vue.use(iView)

//axios全局配置
const instance = axios.create({
  //请求接口
  baseURL: "http://localhost:9997/api/",
  //超时设置
  timeout: 8000,
  //请求头设置
  headers: {
    "accept": "application/json",
    'Content-Type': 'application/json',
  }
})
//respone拦截器==>对响应做处理
instance.interceptors.response.use(
  response => { //成功请求到数据
    if (response.status == 200) {
      return response.data.data
    } else {
      return "请求错误"
    }
  },
  error => { //响应错误处理
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      return "error"
      //return instance.request(originalRequest);//例如再重复请求一次 
    }
  }
);

Vue.prototype.$http = instance

import index from './components/index.vue'
import weightMange from './components/weightMange/weightMange.vue'
import joblog from './components/jobLog/jobLog.vue'

const routes = [{
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/weightMange',
    component: weightMange
  },
  {
    path: '/jobLog',
    component: joblog
  }
]

const router = new Router({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')