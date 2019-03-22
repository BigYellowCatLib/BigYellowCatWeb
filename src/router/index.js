import Vue from 'vue'
import Router from 'vue-router'
import {home} from 'layout/'

Vue.use(Router)


import { login, } from 'page/'

const  routes=[
  {
    path: '/',
    name: 'login',
    hidden: true,
    component: login
  },
  {
    path: '/index',
    name: 'index',
    hidden: true,
    component: home

  }
]
export default new Router({

  routes,
  strict: process.env.NODE_ENV !== 'production',
})

