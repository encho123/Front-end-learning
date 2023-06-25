//1. 导入 express
const express = require('express');

//2. 创建路由对象
const router = express.Router();
console.log(router);
// router.use()

//后台
router.get('/admin', (req, res) => {
  res.send('后台首页');
});

//后台设置
router.get('/setting', (req, res) => {
  res.send('设置页面');
});

console.log(router);
module.exports = router;