import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home/index"),
  },

  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/index"),
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path != "/login") {
    let uid = null; //此处判断是否登录
    if (uid) {
      if (to.path == "/") {
        next({ path: "/home" });
      }
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});

export default router;
