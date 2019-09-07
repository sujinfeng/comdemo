import Vue from 'vue'
import App from './App.vue'

// 导入组件
import mycom from './../packages/index'

Vue.use(mycom)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
