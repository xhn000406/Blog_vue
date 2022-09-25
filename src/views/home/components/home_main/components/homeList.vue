<template>
  <div class="listMain">
    <template v-for="item in artcleList" :key="item.id">
      <div class="item_main" @click="pushRouter(item.id)">
        <div class="item_box">
          <div class="item_img">
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="item_content">
            <div class="content_title">
              {{ item.title }}
              <div class="contetn_topic" v-html="item.valueHtml"></div>
            </div>
            <div class="content_details">
              <div>阅读量：{{ item.artcleDetails }}</div>
              <div class="content_author">
                <div class="author">作者：{{ item.author }}</div>
                <div>日期：{{ item.createTime }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  artcleList: {
    type: Array,
    default: []
  }
})

const router = useRouter()

const pushRouter = (e) => {
  console.log(e)
  router.push(`/info?aricleId=${e}`)
}
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
  height: 140px;
}
.item_img {
  margin-right: 10px;
  width: 240px;
  height: 120px;
}
.item_img img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  vertical-align: middle;
}
.item_content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content_title {
  font-size: 20px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.contetn_topic {
  margin-top: 5px;
  width: 100%;
  font-size: 10px;
  display: -webkit-box;
  color: #303133;
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
}
.content_author {
  display: flex;
  justify-content: space-between;
}

.content_author .author {
  padding-right: 20px;
}
</style>
