import Vue from 'vue'
import Router from 'vue-router'
import Ask from '@/components/Ask'
import Custom404 from '@/components/404'
import AllQuestions from '@/components/AllQuestions'

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
      path: '/allquestions',
      name: 'AllQuestions',
      component: AllQuestions
    },
    {
      path: '/*',
      name: '404',
      component: Custom404
    }
  ]
})
