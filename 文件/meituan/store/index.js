import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
		shangjia:null,//商家信息
		dingdan:null,//订单信息
		gouwuche:{},//购物车信息
		sj:0
	},
    mutations: {
		sj(state){//左侧导航显示隐藏
		       state.sj+=1
		      },
			  sj0(state){//左侧导航显示隐藏
			         state.sj=0
			        },
			  jsj(state){//左侧导航显示隐藏
			         state.sj-=1
			        },
		shangjia(state,data){//左侧导航显示隐藏
		      state.shangjia= data.shangjia
		     },
			dingdan(state,data){//左侧导航显示隐藏
			       state.dingdan= data.dingdan
			      },
			gouwuche(state,data){//左侧导航显示隐藏
				// if(state.gouwuche[data.name] == undefined){
				// 	state.gouwuche[data.name]
				// }
				// state.gouwuche= {}
			       state.gouwuche[data.name]= data.gouwuche
				    // state.gouwuche= []
			      }
	},
    actions: {}
})
export default store