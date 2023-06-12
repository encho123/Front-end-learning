//通过vue-router提供的createRouter创建路由实例
import { createRouter, createWebHashHistory } from "vue-router";
import { routerconstant } from "./routes";
// build router by vue-router
let router = createRouter({
  history: createWebHashHistory(),
  routes: routerconstant,
  //滚动行为
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
