import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import exam from '@/components/exam'
import result from '@/components/result'
import instructions from '@/components/instructions'

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
    }
  ],
  mode: 'history'
})
