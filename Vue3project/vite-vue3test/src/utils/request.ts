import axios from "axios";
//@ts-ignore
import { ElMessage } from "element-plus";
//创建axios实例
let request = axios.create({
  //基础路径和超时时间
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
//请求拦截器  设置拦截器的目的，就是在合适的时候触发这2个函数，来对请求做适当的处理
request.interceptors.request.use((config) => {
  //config是配置对象，可以对config进行统一配置
  //返回配置对象
  // console.log(config);
  return config;
});
//响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功的响应
    return response.data;
  },
  (error) => {
    //处理网络错误
    //定义一个变量来接收错误信息
    let msg = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = "无权访问";
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 500:
        msg = "服务器出现问题";
        break;
      default:
        msg = "无网络";
    }

    ElMessage({
      type: "error",
      message: msg,
    });
    return Promise.reject(error);
  }
);

export default request;
