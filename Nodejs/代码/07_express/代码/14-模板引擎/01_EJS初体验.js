
// ejs的本质是，js和html分离，通过ejs的语法，将js的数据渲染到html中，最终返回给浏览器

//1. 安装 EJS
//2. 导入 EJS
const ejs = require('ejs');
const fs = require('fs');

//字符串
let china = '中国';
// let str = `我爱你 ${china}`;
let weather = '今天天气不错~';

//声明变量
let str = fs.readFileSync('./01_html.html').toString();

//使用 ejs 渲染
let result = ejs.render(str, { china: china, weather });  //可以用简写方式

console.log(result);