<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/home/index.vue'
export default { components: { Home } }
</script>

<style scoped>
.box {
  background-color: aqua;
}
</style>
