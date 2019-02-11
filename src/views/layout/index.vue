<template>
  <el-container>
    <el-header>
      <header_index></header_index>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>
<script>
import header_index from '@/views/layout/header'
export default {
  name:'layout_index',
  data(){
    return{

    }
  },
  components:{
    header_index
  }

  }

</script>

<style>

</style>
