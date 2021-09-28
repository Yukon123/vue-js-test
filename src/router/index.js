import Cookies from 'js-cookie'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // const tokenStr = window.sessionStorage.getItem('token')
  const tokenStr = Cookies.get('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
