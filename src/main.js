import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css';
import './assets/global.css';

Vue.config.productionTip = false
export const bus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
