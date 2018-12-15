import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Categories from './views/Categories.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Categories',
      name: 'Categories',
      component: Categories
    }
  ]
})
