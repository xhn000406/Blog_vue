<template>
  <div class="listMain">
    <template v-for="item in artcleList" :key="item.name">
      <div class="item_main">
        <div class="item_box">
          <div>
            <img class="item_img" :src="item.artcleImg" alt="" />
          </div>
          <div class="item_content">
            <div class="content_title">
              {{ item.artcleTitle }}
            </div>
            <div class="contetn_topic">
              {{ item.artcleTitle }}
            </div>
            <div class="content_details">
              <div>阅读量：{{ item.artcleDetails }}</div>
              <div class="content_author">
                <div>作者：{{ item.artcleAuthor }}</div>
                <div>日期：{{ item.artcleTime }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const artcleList = ref([
  {
    artcleImg:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcndc2020.org%2Fdppr%2Fimg%2Fjimage.jpg&refer=http%3A%2F%2Fcndc2020.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664805288&t=176380bb01c50eb203038406d78ca6e3',
    artcleTitle:
      '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
    artcleTopic:
      '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容',
    artcleDetails: '123123',
    artcleAuthor: '小徐同学',
    artcleTime: '2000-04-06'
  },
  {
    artcleImg:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcndc2020.org%2Fdppr%2Fimg%2Fjimage.jpg&refer=http%3A%2F%2Fcndc2020.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664805288&t=176380bb01c50eb203038406d78ca6e3',
    artcleTitle:
      '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
    artcleTopic:
      '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容',
    artcleDetails: '123123',
    artcleAuthor: '小徐同学',
    artcleTime: '2000-04-06'
  },
  {
    artcleImg:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcndc2020.org%2Fdppr%2Fimg%2Fjimage.jpg&refer=http%3A%2F%2Fcndc2020.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664805288&t=176380bb01c50eb203038406d78ca6e3',
    artcleTitle:
      '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
    artcleTopic:
      '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容',
    artcleDetails: '123123',
    artcleAuthor: '小徐同学',
    artcleTime: '2000-04-06'
  },
  {
    artcleImg:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcndc2020.org%2Fdppr%2Fimg%2Fjimage.jpg&refer=http%3A%2F%2Fcndc2020.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664805288&t=176380bb01c50eb203038406d78ca6e3',
    artcleTitle:
      '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
    artcleTopic:
      '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容容文章内容文章内容文章内容',
    artcleDetails: '123123',
    artcleAuthor: '小徐同学',
    artcleTime: '2000-04-06'
  }
])
</script>

<style scoped>
.listMain {
  width: 100%;
  height: 900px;
  background-color: #ffffff;
}
.item_box {
  display: flex;
  width: 90%;
}
.item_img {
  margin-right: 10px;
  width: 125px;
  height: 125px;
}
.item_content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content_title {
  font-size: 24px;
  width: 500px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.contetn_topic {
  width: 650px;
  font-size: 26rpx;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.item_main {
  margin-top: 10px;
  width: 99%;
  height: auto;
  display: flex;
  justify-content: center;
  box-shadow: inset 0 -1px #f1f2f3;
  background-color: #ffffff;
}
.content_details {
  display: flex;
  justify-content: space-between;
}
.content_author {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
</style>
