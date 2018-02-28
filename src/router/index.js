import Vue from 'vue'
import Router from 'vue-router'
import Ask from '@/components/Ask'
import custom404 from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Ask',
      component: Ask
    },
    {
      path: '/*',
      name: '404',
      component: custom404
    }
  ]
})
