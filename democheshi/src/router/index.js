import Vue from 'vue'
import Router from 'vue-router'
import eachtrs from '@/components/eachtrs'
// import HelloWorld from '@/components/HelloWorld'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',name: 'HelloWorld', component: HelloWorld},
    // {path: '/',name: 'Hello', component: Hello},
    {path: '/',name: 'eachtrs', component: eachtrs}
  ]
})
