import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import exam from '@/components/exam'
import result from '@/components/result'
import instructions from '@/components/instructions'
import test from '@/components/test'
import examGaurd from './examgaurd'
import resultGaurd from './resultgaurd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/exam',
      name: 'exam',
      component: exam
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: instructions
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ],
  mode: 'history'
})
