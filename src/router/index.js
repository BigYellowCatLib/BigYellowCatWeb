import Vue from 'vue'
import Router from 'vue-router'
import { home } from 'layout/'

Vue.use(Router)

import user from 'page/user/user'
import { login,index } from 'page/'

const routes = [
  {
    path: '/',
    name: 'login',
    hidden: true,
    component: login
  },
  {
    path: '/home',
    name: 'home',
    hidden: true,
    component: home

  },
 
  {

    path: '/userList',
    name: '用户列表',
    hidden: true,
    component: home,
    children: [
      { path: "/userList", name: "用户列表", component: user },
      { path: "/index", name: "用户列表", component: index }
    ]

  }
]
export default new Router({

  routes,
  strict: process.env.NODE_ENV !== 'production',
})

