<template>
  <div id="home">
    <Home_top></Home_top>
    <div class="main">
      <Home_main></Home_main>
      <Home_info></Home_info>
    </div>
  </div>
</template>

<script setup>
import Home_top from './components/home_top/index.vue'
import Home_main from './components/home_main/index.vue'
import Home_info from './components/home_info/index.vue'
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;

}
</style>
