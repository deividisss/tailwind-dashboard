import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UIPlayground from '@/views/UIPlayground.vue'
import ProductDetails from '@/views/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/product/:id', component: ProductDetails, props: true },
    {
      path: '/ui-playground',
      name: 'ui-playground',
      component: UIPlayground,
    },
  ],
})

export default router
