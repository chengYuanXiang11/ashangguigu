import Vue from 'vue'
import App from './App'
import router from './router'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

// import Router, {RouterMount} from './js_sdk/hhyang-uni-simple-router/index.js';
// Vue.use(Router)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	  store
})

	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
