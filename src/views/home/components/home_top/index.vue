<template>
  <div>
    <div class="main">
      <div class="main_left">
        <div><img src="" alt="" />图片图片</div>
        <template v-for="item in leftTitle" :key="item.id">
          <div>{{ item.title }}</div>
        </template>
      </div>
      <div class="main_right">
        <template v-for="item in rightTitle" :key="item.id">
          <div @click="itemClick(item.id)">{{ item.title }}</div>
        </template>
      </div>
    </div>
  </div>
  <Chatting class="chatting" v-if="isShow"></Chatting>
</template>

<script setup>
import { ref } from 'vue'
import Chatting from '../../../../components/chatting/index.vue'

const isShow = ref(true)

const leftTitle = ref([
  { id: 1, title: '首页' },
  { id: 2, title: '足迹' },
  { id: 3, title: '首页' }
])

const rightTitle = ref([
  { id: 4, title: '聊天室' },
  { id: 5, title: '博主简介' }
])

const itemClick = (e) => {
  console.log()
  if (e == 4) {
    isShow.value =  !isShow.value
  }
}
</script>

<style scoped>
.main {
  height: 54px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  box-shadow: inset 0 -1px #f1f2f3;
  background-color: #343a40;
  color: #f1f2f3;
}
.main_left {
  width: 20%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.main_right {
  width: 20%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.chatting {
  position: fixed;
  bottom: 10%;
  left: 25%;
}
</style>
