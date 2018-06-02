<template>
 <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <router-link tag="li" to="/mysidebar/list" active-class="active"><a href="#">英雄列表</a></router-link>
        <router-link tag="li" to="/equip/list" active-class="active"><a href="#">武器列表</a></router-link>
        <router-link tag="li" to="/weapon/list" active-class="active"><a href="#">装备列表</a></router-link>
      </ul>
 </div>
</template>

<script>
import MySidebarList from '@/views/heroes/list'
import EquipList from '@/views/equip/list'
import WeaponList from '@/views/weapon/list'
export default {
  name: 'mysidebar',
  components: {
    MySidebarList,
    EquipList,
    WeaponList
  }
}
</script>

<style>

</style>
