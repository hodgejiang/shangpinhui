import { reqGetSearchInfo } from '@/api'
//search模块的小仓库
const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state, searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({commit},params={}){
        
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
const getters = {
    //当前形参state 当前仓库中的state，并非大仓库的state
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}


export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}