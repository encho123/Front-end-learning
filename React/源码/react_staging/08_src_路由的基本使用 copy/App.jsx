// 引入路由组件	
import { Route, Link } from 'react-router-dom'
// 引入react组件
import { Component } from 'react'
// 引入Home组件
import Home from './pages/Home' // 引入Home组件
// 引入About组件
import About from './pages/About' // 引入About组件

export default class App extends Component{
	render(){
		return(
			<div>
				<div className="row">
					{/* 导航栏 */}
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						{/* {左侧的导航区} */}
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
						
						</div>
					</div>
					<div className="col-xs-6">
						{/* 右侧的组件区 */}
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
								<Route path="/ReactRouter" component={Home}></Route>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}