import Vue from 'vue'
import App from './App.vue'
import Carsousel from '@/components/Carsousel'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数：全局组件的名字，第二个参数:哪一个组件
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name,Pagination)
//引入路由
import router from '@/router';
//引入MockServer.js
import '@/mock/mockServe'
//引入样式
import "swiper/css/swiper.css"
//引入仓库
import store from '@/store'
Vue.config.productionTip = false

//注册路由：底下的写法kv一致省略v[router小写的]
//注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  //注册路由
  router,
  //注册仓库：组件实例身上多一个属性$store属性
  store
}).$mount('#app')
