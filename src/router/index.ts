import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutsUs from"../views/aboutUsView.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/aboutUs",
    name:"aboutUs",
    component:AboutsUs
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
  
})

export default router
