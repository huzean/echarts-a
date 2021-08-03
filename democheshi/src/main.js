// The Vue build version to load with the `import` command
//安装：  npm install --save element-ui
//打印    npm install vue-print-nb --save
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import Print from 'vue-print-nb'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Print);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
