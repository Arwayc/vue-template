import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/layouts/common'


Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: Common,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Home'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
