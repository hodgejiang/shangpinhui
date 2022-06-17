<template>
  <div>
    我是首页
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank/>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
    <button @click="add">点击我+1</button>
    <span>仓库的数据{{count}}</span>
    <button >点击我-1</button>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    computed:{
      ...mapState(['count'])
    },
    methods:{
      add(){
        //派发action
        this.$store.dispatch('add');
      }
    }
}
</script>

<style>

</style>