import Vue from 'vue'
import Router from 'vue-router'
import MySidebarList from '@/views/heroes/list'
import EquipList from '@/views/equip/list'
import WeaponList from '@/views/weapon/list'
Vue.use(Router)

export default new Router({
  routes: [
    { name: 'home', path: '/', redirect: { name: 'mysidebarList' } },
    { name: 'mysidebarList', path: '/mysidebar/list', component: MySidebarList },
    { name: 'equiplist', path: '/equip/list', component: EquipList },
    { name: 'weaponlist', path: '/weapon/list', component: WeaponList }
  ]
})
