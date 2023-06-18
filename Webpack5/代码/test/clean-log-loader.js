module.exports = function (content, map, meta) {
  // 查看content: 文件内容
  // console.log(content);  
  // 查看map: 文件内容的映射
  // console.log(map);  undefined
  //查看this是什么东西
  console.log(this);
  // 清除文件内容中console.log(xxx)
  return content.replace(/console\.log\(.*\);?/g, "");
};
