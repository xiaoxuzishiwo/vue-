<template>
  <div>
    <my-herder></my-herder>
    <div class="container-fluid">
      <div class="row">
       <!-- 侧边栏 -->
       <my-sidebar></my-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 内容 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MyHerder from '@/components/myheader.vue'
import MySidebar from '@/components/mysidebar.vue'

export default {
  name: 'App',
  components: {
    MyHerder,
    MySidebar
  }
}
</script>

<style>
</style>
