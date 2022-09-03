<template>
  <div>
    <ListTop id="listTop"></ListTop>
    <ListMain id="ListMain"></ListMain>
  </div>
</template>

<script setup>
import ListTop from './components/listTop.vue'
import ListMain from './components/listMain.vue'
</script>

<style scoped>
#listTop {
  width: 900px;
  height: auto;
  margin-right: 10px;
  background-color: #ffffff;
}
</style>
