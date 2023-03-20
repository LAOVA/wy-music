import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

import PlayList from '@/views/PlayList.vue'
import Song from '@/views/Song.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // 动态路由
  {
    path: '/playlist/:id',
    name: 'playlist',
    component: PlayList,
    props: true
  },
  {
    path: '/song/:id',
    name: 'song',
    component: Song,
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
