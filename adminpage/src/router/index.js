import Vue from 'vue'
import Router from 'vue-router'
import EditConfig from '@/components/EditConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditConfig',
      component: EditConfig
    }
  ]
})
