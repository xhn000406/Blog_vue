<template>
  <HomeMain id="listTop">
    <HomeList></HomeList>
  </HomeMain>
</template>

<script setup>
import HomeMain from './components/homeMain.vue'
import HomeList from './components/homeList.vue'
</script>

<style scoped>
#listTop {
  width: 900px;
  height: auto;
  background-color: #ffffff;
}
</style>
