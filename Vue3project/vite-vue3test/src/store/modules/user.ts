//创建用户相关的小仓库
import { defineStore } from "pinia";
// 引入api接口
import { reqLogin } from "@/api/user";
//引入接口类型
import type { loginType } from "@/api/user/type";
//创建小仓库
let userStore = defineStore("User", {
    //小仓库的数据
    state: () => {
        return {
            token: "", //用户的token
        };
    },
    //异步 逻辑的处理
    actions: {
        //小仓库的方法
        //用户登录方法
        async login(data: loginType) {
            let result = await reqLogin(data);
            console.log(result);
        },
    },
    getters: {
        //小仓库的计算属性
    },
});

//导出小仓库
export default userStore;
