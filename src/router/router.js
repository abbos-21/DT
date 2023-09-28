import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/Login/LoginPage.vue'

const routes = [
  {
    path: '/',
    component: LoginPage,
    name: 'Login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
