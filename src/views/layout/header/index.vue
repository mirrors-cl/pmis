<template>
  <div>
    <!-- 开启了router模式，该模式会在激活导航时以index为path进行路由跳转 -->
    <el-menu
    mode="horizontal"
    background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
      router=true>
      <!-- 利用组件引用element（由于数据需要循环单独拆分），给子组件传递了一个menu_data数据，名字叫navMenus-->
    <NavMenu :navMenus="menu_data"></NavMenu>
    </el-menu>
  </div>
</template>
<script>
  import {getStore} from "@/assets/js/utils.js";
  import fetch from '@/assets/js/fetch'
  import NavMenu from '@/views/layout/header/page/NavMenu'
  import qs from 'qs'
  export default {
    name: "header_index",
    data(){
      return{
        user: getStore('userInfo'),
        menu_data:{},
        activeIndex:'日常填报'
      }
    },
    methods:{
      getdata(){
        fetch
          .post('login',qs.stringify({user_code:this.user.user_code}))
          .then(res=>{
          this.menu_data=res.data
          console.log(this.menu_data)
        })
      }
    },
    created(){
      this.getdata();
    },
    computed:{

    },
    components:{
        NavMenu
    }
  }
</script>

<style scoped>
</style>
