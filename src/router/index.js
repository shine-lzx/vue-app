import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/modules/user";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    hidden: true,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log(store.state.openId);
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   if (to.path != "/login") {
//     let uid = store.state.openId;
//     if (uid) {
//       if (to.path == "/") {
//         next({ path: "/home" });
//       }
//       next();
//     } else {
//       next({ path: "/login" });
//     }
//   } else {
//     next({ path: "/404" });
//   }
// });
router.beforeEach((to, from, next) => {
  console.log(store.state.openId);
  if (to.matched.length === 0) {
    from.name
      ? next({
          name: from.name,
        })
      : next("/404");
  } else {
    next(); //如果匹配到正确跳转
  }
});

export default router;
