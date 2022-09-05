<template>
  <div class="dataDiv">
    <div class="topDiv"></div>
    <div class="bodyDiv">
      <template v-for="item in chattingList" :key="item.id">
        <div class="chatting_box">
          <div><img :src="item.chattingImg" alt="" class="chatting_img" /></div>
          <div class="chatting_main">
            <div>{{ item.chattingName }}</div>
            <div class="demo">{{ item.chattingContent }}</div>
          </div>
        </div>
      </template>
    </div>
    <div class="bottomDiv"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const chattingList = ref([
  {
    chattingImg:
      'https://img2.baidu.com/it/u=125684719,3114347481&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500',
    chattingName: '小徐同学',
    chattingContent: '我是神'
  }
])
</script>

<style scoped>
.dataDiv {
  height: 700px;
  width: 700px;
  background-color: bisque;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.topDiv {
  height: 50px;
  width: 100%;
  background-color: brown;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.bodyDiv {
  width: 700px;
  height: 550px;
  display: flex;
}
.bottomDiv {
  height: 100px;
  background-color: cornflowerblue;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.chatting_box {
  width: 250px;
  height: 100px;
  background-color: pink;
  display: flex;
  align-items: center;
}
.chatting_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.demo {
  width: 100px;
  height: 50px;

  border-radius: 10px;
  border: 1px solid red;
  position: relative;
}
.demo::before,
.demo::after {
  content: '';
  position: absolute;
  top: 12.5px;
  left: -20px;
  width: 0px;
  height: 0px;
  border-right: 10px solid red;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-top: 10px solid transparent;
}
.demo::after {
  border-right: 10px solid #ffffff;
}
.chatting_main {
  display: flex;
  flex-direction: column;
}
</style>
