
import { reqCategoryList,reqFloorList,reqGetBannerList } from "@/api"

//home模块的小仓库

const state = {
    //state 中数据默认初始值不能乱写，服务器返回对象，服务器返回数组
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLISR(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    }
}
const actions = {
    //通过API里面的接口函数调用,获取服务器的数据
   async categoryList({commit}){
        let result = await reqCategoryList();

        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit('GETBANNERLISR',result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code == 200){
            commit('GETFLOORLIST',result.data)
        }
    }
}
const getters = {}


export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}