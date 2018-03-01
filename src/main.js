// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
      apiKey: 'AIzaSyA-XUeRwJoFc4Rgb61nKVBJeFCPlsyf72E',
      authDomain: 'ask-the-bishop.firebaseapp.com',
      databaseURL: 'https://ask-the-bishop.firebaseio.com',
      projectId: 'ask-the-bishop',
      storageBucket: 'ask-the-bishop.appspot.com',
      messagingSenderId: '329811563567'
    })
  }
})
