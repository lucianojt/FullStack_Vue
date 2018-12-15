import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Categories from './views/Categories.vue'
import Chart from './views/Chart.vue'

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
    },
    {
      path: '/Chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
