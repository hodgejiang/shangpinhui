//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);

//配置路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'


let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){
        originPush.call(this, location,resolve, reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this.location,resolve,reject);
    }else{
        originReplace.call(this.location,()=>{},()=>{});
    }
}
    

//先把VueRouter原型对象的push，先保存一份
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{ show:true }
        },
        {
            path:'/search/:keyWords?',
            component:Search,
            meta:{ show:true },
            name:"search"
        },
        {

            path:'/login',
            component:Login,
            meta:{ show:false }
        },
        {
            path:'/register',
            component:Register,
            meta:{ show:false }
        },
        //重定向
        {
            path:'*',
            redirect:'/home'
        }
    ]
})