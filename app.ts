declare var require: any

import Vue = require('vue')
var App = require('./src/App.vue').default

new Vue({
  el: '#app',
  components: { App },
  render: h => h('app')
})