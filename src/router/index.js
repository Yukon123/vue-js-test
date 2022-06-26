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

    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/upload',
    name: 'Upload',

    component: () => import(/* webpackChunkName: "Upload" */ '../views/Upload.vue'),
  },
  {
    path: '/layout',
    name: 'layout',

    component: () => import(/* webpackChunkName: "Layout" */ '../views/Layout.vue'),
  },
  {
    path: '/diff',
    name: 'Diff',

    component: () => import(/* webpackChunkName: "Diff" */ '../views/Diff.vue'),
  },
  {
    path: '/cssworld',
    name: 'cssworld',

    component: () => import(/* webpackChunkName: "CssWorld" */ '../views/CSSword.vue'),
  },
  {
    path: '/eleForm',
    name: 'eleForm',

    component: () => import(/* webpackChunkName: "CssWorld" */ '../views/EleForm.vue'),
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // const tokenStr = window.sessionStorage.getItem('token')
  const tokenStr = Cookies.get('token')
  if (!tokenStr) return next('/login')
  next()
})
/* 正则使用'\S'而不是'\d' 为了适配写魔法注释的朋友，写'\d'遇到魔法注释就匹配不成功了。
 * 使用reload方法而不是replace原因是replace还是请求之前的js文件，会导致循环报错。reload会刷新页面， 请求最新的index.html以及最新的js路径。
 * 直接修改location.href或使用location.assign方法或location.replace方法，和router.replace方法同理， 在当前场景中请求的依然是原来的js文件，区别仅有浏览器的历史栈。因此必须采用reload方法
 * reload()有个特点是当你在A页面试图进入B页面的时候报错，会在A页面刷新，因为必须在刷新后书写逻辑进入B页面，
 * 幸亏有个router.onReady()方法。为了避免在特殊情况下服务器丢失资源导致无限报错刷新，做了一步控制，仅尝试    一次进入B页面，如果不成功就只刷新A页面，停留在当前的A页面。
 */

router.onReady(() => {
  const targetPath = localStorage.getItem('targetPath')
  const tryReload = localStorage.getItem('tryReload')
  if (targetPath) {
    localStorage.removeItem('targetPath')
    if (!tryReload) {
      router.replace(targetPath)
      localStorage.setItem('tryReload', true)
    } else {
      localStorage.removeItem('tryReload')
    }
  }
})

router.onError((error) => {
  const jsPattern = /Loading chunk (\S)+ failed/g
  const cssPattern = /Loading CSS chunk (\S)+ failed/g
  const isChunkLoadFailed = error.message.match(jsPattern || cssPattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    localStorage.setItem('targetPath', targetPath)
    window.location.reload()
  }
})
export default router
