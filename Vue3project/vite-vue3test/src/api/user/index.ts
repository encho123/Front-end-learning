//统一管理用户相关的接口
import request from "@/utils/request";
import type { ResponseType, loginResponseData, loginType } from "./type.ts";
//统一管理接口
enum API {
  LOGGIN_RUL = "user/login",
  USERINFO_URL = "user/userinfo",
}
//暴露请求方法
//登录接口方法
//注意下面2种函数的写法，有大括号和没有大括号的区别，否则后面会报错
export const reqLogin = (data: loginType) =>
  request.post<any, loginResponseData>(API.LOGGIN_RUL, data);
//获取用户信息接口方法
export const reqUserInfo = () => {
  return request.get<any, ResponseType>(API.USERINFO_URL);
};
