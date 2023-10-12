import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard,
    children: [
      {
        path: 'overview',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue')
      },
      {
        path: 'messages',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Messages.vue')
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
      },
      {
        path: 'settings',
        component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
