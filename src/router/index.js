import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/category/:id',
    name: 'Home',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/article/:id',
    name: 'Home',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/subscribe/',
    name: 'Home',
    component: () => import('../views/Subscribe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
