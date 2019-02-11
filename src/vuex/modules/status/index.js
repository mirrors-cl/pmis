import actions from './action'
import mutations from './mutations'
//引入actions,mutations

export  default {
  state:{//这里面是要读取或者写入数据的地方
    msg:'默认状态'
  },
  //state action mutations顺序不能乱
  actions:actions,
  mutations:mutations
}
