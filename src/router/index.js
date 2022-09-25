import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/components/home_main/index.vue')
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('../views/info/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
