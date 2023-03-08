import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomePinia.vue'
import HomePinia from "@/views/HomePinia.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePinia
  },
  {
    path: '/promise-test',
    name: 'promise-test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Promise-test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
