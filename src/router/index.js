import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BoardViews from '../views/Boards/BoardViews'

import AppNotFound from "../components/AppNotFound"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{Auth:false,title:"Inicio"}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/board/:Id",
    name: "board",
    component: BoardViews,
    props: true,
    meta:{Auth:false,title:"Boards"}
  },
  {
    path: "*",
    component: AppNotFound,
    meta:{Auth:false,title:"Pagina no encontrada"}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
