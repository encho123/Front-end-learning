var createError = require('http-errors'); //http-errors模块用来创建http错误对象
var express = require('express');
var path = require('path'); //path模块用于处理文件和目录的路径
var cookieParser = require('cookie-parser'); //cookie-parser中间件用于获取web浏览器发送的cookie中的内容
var logger = require('morgan'); //morgan中间件用于在控制台中，显示req请求的信息

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置模板文件存放目录
app.set('view engine', 'ejs'); //设置模板引擎为ejs

app.use(logger('dev')); //使用日志中间件
app.use(express.json()); //使用express.json()中间件，用于解析json数据格式
app.use(express.urlencoded({ extended: false })); //使用express.urlencoded()中间件，用于解析urlencoded请求体
app.use(cookieParser()); //使用cookieParser()中间件，用于解析cookie数据
app.use(express.static(path.join(__dirname, 'public'))); //使用express.static()中间件，设置静态资源目录

// 路由中间件
app.use('/', indexRouter); //使用indexRouter中间件，处理根路由
app.use('/users', usersRouter); //使用usersRouter中间件，处理/users路由

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
