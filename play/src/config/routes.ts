/*
 * @Author: Pan Jingyi
 * @Date: 2022-09-25 18:25:54
 * @LastEditTime: 2022-09-25 18:26:04
 */
import { RouteRecordRaw } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import FocusPage from '../core/commands/focus/Focus.vue'

const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    component: IndexPage 
  },
  {
    path: '/focus',
    component: FocusPage
  }
]

export default routes
