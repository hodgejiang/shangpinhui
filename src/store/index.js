import Vue from 'vue';
import Vuex from 'vuex'

//需要使用插件一次

Vue.use(Vuex)

const state = {
    count:1
}
//state:仓库存储数据地方

const mutations = {
    ADD(state,count){
        state.count ++
    }
}
//mutations：修改state的唯一手段

const actions = {
    //这里可以书写业务逻辑，但是不能修改state
    add({commit}){
        commit("ADD")
    }
}
//action:处理action，可以书写自己的业务逻辑，也可以处理异步

const getters = {}
//getters:理解为计算属性，用于简化仓库数据，让组件获取参控股的数据更加方便

//对外暴露Store类的一个实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
 
    }
);