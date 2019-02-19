<template>
 <div>
   <!--  -->
   {{jisuan}}
     <!-- <template v-for="navMenu in navMenus">
      {{navMenu.childs}}
     </template> -->
     <!-- <el-menu-item 
       v-if="!navMenu.childs&&navMenu.entity" 
       :key="navMenu.entity.pk_menu" 
       :data="navMenu" 
       :index="nav.entity.menu_url">
        <span slot="title">{{navMenu.entity.menu_name}}</span>
       </el-menu-item> -->
 </div>
</template>

<script>
 export default {
  //  接手父组件传递的navMenus数据
    props: ['navMenus'],
    data () {
     return {
       menuData:[
         {
           entity:{},
           childs:[
             {
               entity:{},
               childs:[
                 {
                   entity:{}
                 }
               ]
             },
           ]
         }
       ]
    }
   },
  //  计算属性
   computed:{
    //  jisuan(){
    //    for(list in this.navMenus){
    //     if(list.node==='1'){
    //       this.menuData.entity = list.menu_name
    //      return menuData.entity
    //     }
    //    }
      
    //    return null
    //  }
   },
  //  初始化方法
   created(){
   },
  //  方法
   methods:{
   },
  //  组件
   components: {

   }
 }
</script>

<style>
/* 水平样式 */
 .el-menu--horizontal>div>.el-submenu {
    float: left;
}
/* 一级菜单的样式 */
.el-menu--horizontal>div>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
}
</style>

