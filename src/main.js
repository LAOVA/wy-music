import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 导入css
import './assets/css/base.css'

// 导入api
import api from '@/api'
Vue.prototype.$http = api

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
