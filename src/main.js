// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import * as firebase from 'firebase'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDOdYpGj_5glPRNDK4qBfXWOlFqP_q9LgY',
      authDomain: 'devonshirequestions.firebaseapp.com',
      databaseURL: 'https://devonshirequestions.firebaseio.com',
      projectId: 'devonshirequestions',
      storageBucket: '',
      messagingSenderId: '189925556574'
    })
  }
})
