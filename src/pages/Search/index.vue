<template>
  <div>
    我是搜索
    <h1>params参数----{{$route.params.keyWords}}</h1>
    <h1>query参数-----{{$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
    name:'search'
}
</script>

<style>

</style>