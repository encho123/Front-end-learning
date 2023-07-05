//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
// 引入BrowserRouter
import { BrowserRouter } from 'react-router-dom'
//引入App
import App from './App'

ReactDOM.render(
	// 这里的browserRouter是一个路由容器，里面包裹的是路由组件
	// 里面的路由api就可以使用了
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)