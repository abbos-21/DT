import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/Login/LoginPage.vue'
import FirstStep from "@/components/Steps/FirstStep.vue";

const routes = [
  {
    path: '/',
    component: LoginPage,
    name: 'Login'
  },

  {
    path: '/step1',
    component: FirstStep,
    name: "Step 1"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
