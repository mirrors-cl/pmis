import Vue from 'vue'
import Router from 'vue-router'
import iframetest from '@/components/iframe/iframetest'
import Login from '@/views/user/Login'
import layout_index from '@/views/layout/'
import main_index from '@/views/layout/main'
import main_index1 from '@/views/layout/main/index1'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/iframetest',
      name: 'iframetest',
      component: iframetest
    },
    // 主页面
    {
      path: '/layout_index',
      name: 'layout_index',
      component: layout_index,
      children:[
        {
          path: '/日常填报',
          name:'日常填报',
          component:main_index
        },
        {
          path: '/单据审批',
          name:'单据审批',
          component:main_index1
        }
      ]
    }
  ]
})
