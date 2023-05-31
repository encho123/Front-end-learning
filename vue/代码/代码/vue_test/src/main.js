//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false

//应用（使用）插件 1,2,3是传给插件的参数. plugins是插件对象是一个对象，里面有install方法，install方法里面有Vue参数
//vue.use(插件对象，参数1，参数2，参数3),vue.use会调用插件对象的install方法，感觉install像是一个回调函数
//vue.use会找到Plugins对象里面的install方法，然后执行install方法，install方法里面有Vue参数，Vue参数是Vue的构造函数
Vue.use(plugins, 1, 2, 3)
//创建vm
new Vue({
	el: '#app',
	render: h => h(App)  //h是createElement函数，h(App)是调用createElement函数，返回一个vnode对象，vnode对象是虚拟dom
	//render函数的作用是将虚拟dom渲染成真实dom.	
})