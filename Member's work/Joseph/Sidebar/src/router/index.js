import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "overview" */ '../views/Overview')
      },
      {
        path: '/messages',
        component: () => import(/* webpackChunkName: "messages" */ '../views/Messages')
      },
      {
        path: '/profile',
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile')
      },
      {
        path: '/settings',
        component: () => import(/* webpackChunkName: "settings" */ '../views/Settings')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
