//导入 jwt
const jwt = require('jsonwebtoken');

//创建(生成) token 
// let token = jwt.sign(用户数据, 加密字符串, 配置对象);
let token = jwt.sign({
  username: 'zhangsan',
  age: 18
}, 'atguigu', {
  expiresIn: 1, //单位是秒
})
console.log(token);
let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNjg3Njk1NDQyLCJleHAiOjE2ODc2OTYwNDJ9.B-Kt4RJFTT02k3n0klyDG8VZe5qc-R8QzA1HpLTIChA'

// 校验 token
jwt.verify(t, 'atguigu', (err, data) => {
  if (err) {
    console.log('校验失败~~');
    return
  }
  console.log(data);
})