import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutView from '../views/LayoutView.vue'
import AboutView from '../views/AboutView.vue'
import RecursionView from '../views/RecursionView'
import TableView from '../views/TableView'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: LayoutView,
    // layout 下面的子路由 所有页面下的 view 都是在 layout 里面的 router-view 里面跳转
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/recursion',
        name: 'RecursionView',
        component: RecursionView
      },
      {
        path: '/table',
        name: 'TableView',
        component: TableView
      }
    ]
  }

  // {
  //   path: '/recursion',
  //   name: 'RecursionView',
  //   component: RecursionView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
