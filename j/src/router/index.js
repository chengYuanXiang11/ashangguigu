import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout2.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/table',
    // children: [{
    //   path: '/table1',
    //   name: 'table1',
    //   component: () => import('@/views/table/table1'),
    //   meta: { title: 'engineering', icon: 'engineering' }
    // }, {
    //   path: '/table2',
    //   // name: 'table',
    //   component: () => import('@/views/table/table2'),
    // },{
    //   path: 'table3',
    //   name: 'table3',
    //   component: () => import('@/views/table/table3'),
    // }, {
    //   path: 'table4',
    //   name: 'table4',
    //   component: () => import('@/views/table/table4'),
    // }, {
    //   path: 'table5',
    //   name: 'table5',
    //   component: () => import('@/views/table/table5'),
    // }
    // ]
  } ,{
    path: '/table',
    component: Layout,
    children: [{
      path: '/table1',
      name: 'table1',
      component: () => import('@/views/table/table1'),
      meta: { title: 'engineering', icon: 'engineering' }
    }, {
      path: '/table2',
      // name: 'table',
      component: () => import('@/views/table/table2'),
    },{
      path: 'table3',
      name: 'table3',
      component: () => import('@/views/table/table3'),
    }, {
      path: 'table4',
      name: 'table4',
      component: () => import('@/views/table/table4'),
    }, {
      path: 'table5',
      name: 'table5',
      component: () => import('@/views/table/table5'),
    }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router