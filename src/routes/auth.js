export default [
  {
    path: '/login',
    component: () => import('@/components/auth/Login.vue')
  },
  {
    path: '/logout',
    component: () => import('@/components/auth/Logout.vue')
  },
  {
    path: '/signup',
    component: () => import('@/components/auth/SignUp.vue')
  }
]
