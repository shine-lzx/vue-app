import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login'),
  },

  {
    path: '/',
    redirect: '/home',
    meta: { keepAlive: true, auth: true },
    component: () => import('@/layout'),
    children: [
      {
        name: 'Home',
        path: 'home',
        component: () => import('@/views/home'),
      },
      {
        name: 'SearchPage',
        path: 'searchPage',
        component: () => import('@/views/home/components/searchPage'),
      },
      {
        name: 'shopping',
        path: 'shopping',
        component: () => import('@/views/shopping'),
      },
      {
        name: 'user',
        path: 'user',
        component: () => import('@/views/user'),
      },
      {
        name: 'map',
        path: 'map',
        component: () => import('@/views/map'),
      },
    ],
  },

  {
    path: '*',
    meta: {
      title: '404-NotFound',
    },
    component: () => import('@/views/404'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  let loginStatus = localStorage.getItem('isLogin')
  if (to.matched.some((m) => m.meta.auth)) {
    if (loginStatus) {
      next()
    } else {
      next({ path: '/login', query: { Rurl: to.fullPath } })
    }
  } else {
    next()
  }
})

export default router
