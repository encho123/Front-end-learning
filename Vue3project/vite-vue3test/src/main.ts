import { createApp } from "vue";
import App from "./App.vue";
// 引入element-plus
import ElementPlus from "element-plus";
// 引入element-plus样式
import "element-plus/dist/index.css";
//引入中文设置，解决element-plus中文本地
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 创建app  挂载app
// 引入svg格式的图标
import "virtual:svg-icons-register";
//引入并且，注册全局组件
import gloablComponent from "./components/index";
//引入全局样式
import "./styles/index.scss";
//引入路由
import router from "./router/index";
//引入仓库
import pinia from "./store";
//创建app
const app = createApp(App);
// 注册全局组件
app.use(gloablComponent);
// 使用element-plus,先使用再去挂载，否则会报错，提示组件未注册
app.use(ElementPlus, { locale: zhCn });
//挂载仓库
app.use(pinia);
//挂载路由
app.use(router);
//挂载app
app.mount("#app");
