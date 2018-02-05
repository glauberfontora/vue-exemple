// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SvgSprite from 'vue-svg-sprite'
import VueParallaxJs from 'vue-parallax-js'
import VueGoodTable from 'vue-good-table'

Vue.config.productionTip = false

// Import conta.MOBI(Ingá web) SCSS
require('./assets/scss/bootstrap-grid.scss')

Vue.use(SvgSprite, {
  url: '/static/svg/front-end.svg',
  class: 'front-end'
})

Vue.use(VueParallaxJs)
Vue.use(VueGoodTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
