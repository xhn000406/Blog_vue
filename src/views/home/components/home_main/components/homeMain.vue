<template>
  <div id="home_main">
    <div class="home_main">
      <div class="home_title">
        <div class="main_left">
          <div>图片图片</div>
          <div>文章动态</div>
        </div>
        <div class="mian_right">
          <template v-for="(item, index) in titleName" :key="item.title">
            <button
              class="btnClick"
              :class="index === tableIndex ? 'action' : ''"
              @click="itemClick(index)"
            >
              {{ item.title }}
            </button>
          </template>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomeList from './homeList.vue'

const tableIndex = ref(0)

const titleName = ref([
  {
    id: 0,
    title: '编程'
  },
  {
    id: 1,
    title: '旅行'
  },
  {
    id: 2,
    title: '书籍'
  },
  {
    id: 3,
    title: '电影'
  }
])

const itemClick = (e) => {
  tableIndex.value = e
}
</script>

<style scoped>
#home_main {
  width: 100%;
  height: auto;
  background-color: #ffffff;
}
.home_title {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}

.home_main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: inset 0 -1px #28a745;
}
.action {
  background: #2e82ff;
}
.main_left {
  display: flex;
}
.main_right {
  display: flex;
}
.btnClick {
  width: 60px;
  height: 30px;
  line-height: 24px;
  background: #2e82ff;
  margin-left: 10px;
  color: #ffffff;
  font-size: 14px;
  border-radius: 27px;
  text-align: center;
}
</style>
