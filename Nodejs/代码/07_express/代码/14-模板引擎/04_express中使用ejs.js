//导入 express
const express = require('express');
//导入 path
const path = require('path');
//创建应用对象
const app = express();
//1. 设置模板引擎，设置了模板引擎就需要用这模板的语法来书写模板文件，还有其他的模板引擎，如pug，twing等
app.set('view engine', 'ejs');//其他的模板引擎 pug  twing
//2. 设置模板文件存放位置   模板文件: 具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'));

//创建路由
app.get('/home', (req, res) => {
  //3. render 响应
  // res.render('模板的文件名', '数据');
  //声明变量
  let title = '尚硅谷 - 让天下没有难学的技术';
  res.render('home', { title });  //第一个模板的文件名，第二个参数是数据
  //4. 创建模板文件
});

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})