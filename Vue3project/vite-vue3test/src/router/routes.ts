//定义常量路由，暴露出去
export const routerconstant = [
  {
    //login
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    //home
    path: "/home",
    component: () => import("@/views/home/index.vue"),
    name: "home",
  },
  {
    //404
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
  },
  {
    //other pages
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any",
  },
];
