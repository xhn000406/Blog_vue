<template>
  <div id="home_info">
    <div class="author">
      <img src="https://avatars.githubusercontent.com/u/103575415?v=4" alt="" />
    </div>
    <template v-for="item in titleName" :key="item.title">
      <div class="title">
        <div>{{ item.value }}</div>
      </div>
    </template>
    <div class="articleBox">
      <template v-for="item in article" :key="item.key">
        <div class="artileCount">
          <span class="count">{{ item.count }}</span>
          <span class="title">{{ item.title }}</span>
        </div>
      </template>
    </div>
    <div class="linkClass">
      <a href="https://github.com/xhn000406" title="gitHub">git</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const titleName = ref([
  {
    value: '徐浩楠'
  },
  {
    value: '我是一只小熊猫'
  }
])      

const article = ref([
  {
    count: '5',
    title: '文章数'
  },
  {
    count: '5',
    title: '文章数'
  },
  {
    count: '5',
    title: '文章数'
  }
])
</script>

<style scoped lang="less">
#home_info {
  width: 300px;
  height: 300px;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.author img {
  width: 140px;
  height: 140px;
  background-color: pink;
  border-radius: 50%;
}
.title {
  display: flex;
  color: #606266;
  font-size: 14px;
  margin-top: 8px;
}
.artileCount {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100px;
  margin-bottom: 30px;
  .count {
    margin-bottom: 4px;
    font-size: 20px;
  }
}
.articleBox {
  padding-top: 20px;
  width: 90%;
  height: 80px;
  display: flex;
  border-bottom: 1px inset #303133;
}
.artileCount:last-child::after {
  content: '';
  display: none;
}
.artileCount::after {
  position: absolute;
  top: 10px;
  right: 0;
  content: '';
  width: 1px;
  height: 30px;
  background: #303133;
}
.linkClass {
  margin: 10px 0px 10px 0px;
}
</style>
