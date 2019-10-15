export default [
  {
    path: '/user',
    component: () => import('@/components/user/UserList.vue')
  },
  {
    path: '/user/:id',
    component: () => import('@/components/user/UserDetails.vue')
  }
]
