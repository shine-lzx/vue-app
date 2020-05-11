import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store/modules/user";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home"),
  },

  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home"),
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
