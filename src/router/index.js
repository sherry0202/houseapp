import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/modules/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product,
  },
  {
    path: '/assessment',
    name: 'assessment',
    component: () => import('../views/modules/Assessment.vue')
  },
  {
    path: '/merchant',
    name: 'merchant',
    component: () => import('../views/modules/Merchant.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
