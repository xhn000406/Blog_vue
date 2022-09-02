<template>
  <div id="home_info">
    <div class="author"><img src="" alt="" /></div>
    <template v-for="item in titleName" :key="item.title">
      <div class="title">
        <div>{{ item.title }}</div>
        :
        <div>{{ item.value }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const titleName = ref([
  {
    title: '姓名',
    value: '徐浩楠'
  },
  {
    title: '目标',
    value: '找份实习工作'
  }
])
</script>

<style scoped>
#home_info {
  width: 300px;
  height: 300px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.author {
  width: 140px;
  height: 140px;
  background-color: pink;
  border-radius: 50%;
}
.title {
  display: flex;
  font-size: 14px;
  margin-top: 8px;
}
</style>
