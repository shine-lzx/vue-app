import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store/modules/user";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layout"),
    children: [
      {
        name: "Home",
        path: "home",
        component: () => import("@/views/home"),
      },
      {
        name: "shopping",
        path: "shopping",
        component: () => import("@/views/shopping"),
      },
      {
        name: "user",
        path: "user",
        component: () => import("@/views/user"),
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login"),
  },

  {
    path: "/404",
    meta: {
      title: "404-NotFound",
    },
    component: () => import("@/views/404"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {});

export default router;
