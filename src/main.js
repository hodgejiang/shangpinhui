import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router';
Vue.config.productionTip = false

//注册路由：底下的写法kv一致省略v[router小写的]
//注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
new Vue({
  render: h => h(App),
  //注册路由
  router
}).$mount('#app')
