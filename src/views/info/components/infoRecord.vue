<template>
  <div>
    <el-divider content-position="center">评论区</el-divider>
    <div class="recordMain">
      <el-input
        v-model="recordData.recordText"
        :autosize="{ minRows: 5, maxRows: 10 }"
        type="textarea"
        placeholder="输入你要回复的内容(我会以邮箱的形式回复你)"
      />
      <div class="record">
        <span>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </span>
        <div>
          <el-input v-model="recordData.recordName" placeholder="输入名称" />
        </div>
        <div>
          <el-input v-model="recordData.recordHotmail" placeholder="输入邮箱" />
        </div>
        <div class="recordHandle" @click="SendMessage">
          <el-button type="info">评论</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const recordData = ref([
  {
    recordText: '',
    recordName: '',
    recordHotmail: ''
  }
])

function SendMessage() {
  console.log(recordData.value)
}
</script>

<style lang="less" scoped>
.recordMain {
  margin: 10px;
}

.record {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.record div {
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
}
.recordHandle {
  width: 50px !important;
}
</style>
