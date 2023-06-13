import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage =>
      import(/* webpackChunkName: "home" */ '../views/HomePage.vue')
   },
   {
    path: '/discover',
    name: 'discover',
    component: AboutPage =>
    import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
   },
    {
      path: '/search',
      name: 'search',
      component: SearchPage =>
      import(/* webpackChunkName: "home" */ '../views/SearchPage.vue')
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router