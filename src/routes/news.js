import Index from '@/components/news/Index.vue'

export default [
  {
    path: '/',
    component: Index
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