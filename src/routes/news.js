export default [
  {
    path: '/',
    component: () => import('@/components/news/Index.vue')
  },
  {
    path: '/news/add',
    meta: { Auth: true },
    component: () => import('@/components/news/NewNews.vue')
  },
  {
    path: '/news/:id',
    meta: { Auth: true },
    component: () => import('@/components/news/NewsDetails.vue')
  }
]