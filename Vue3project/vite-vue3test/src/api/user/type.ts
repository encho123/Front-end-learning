//登录接口需要携带参数的类型
export interface loginType {
  username: string;
  password: string;
}

interface dataTypes {
  token: string;
}

//登录接口返回的数据类型
export interface ResponseType {
  code: number;
  data: dataTypes;
}

//定义服务端返回的数据类型
export interface loginResponseData {
  code: number;
  data: any;
}
