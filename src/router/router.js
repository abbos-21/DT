import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/Login/LoginPage.vue'
import FirstStep from '@/components/Steps/FirstStep.vue'
import SecondStep from '@/components/Steps/SecondStep.vue'
import ThirdStep from "@/components/Steps/ThirdStep.vue";

const routes = [
  {
    path: '/',
    component: LoginPage
  },

  {
    path: '/login',
    component: LoginPage,
    name: 'Login'
  },

  {
    path: '/step1',
    component: FirstStep,
    name: 'Step 1'
  },

  {
    path: '/step2',
    component: SecondStep,
    name: 'Step 2'
  },

  {
    path: '/step3',
    component: ThirdStep,
    name: 'Step 3'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
