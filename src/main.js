import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles/main.scss'

/* ===== LENIS (SMOOTH SCROLL GLOBAL) ===== */
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  smooth: true,
  lerp: 0.08
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

/* ===== VUE ===== */
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
