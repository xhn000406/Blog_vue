<template>
  <div class="dataDiv">
    <div class="topDiv">
      <div class="top_titleBox">
        <div>知识分享聊天室</div>
        <div @click="closeItem">X</div>
      </div>
    </div>
    <div class="bodyDiv">
      <div class="body_main">
        <template v-for="item in chattingList" :key="item.id">
          <div :class="item.mySelf == 0 ? 'chatting_other' : 'chattingMyself'">
            <div>
              <img :src="item.chattingImg" alt="" class="chatting_img" />
            </div>
            <div class="chatting_main">
              <div>{{ item.chattingName }}</div>
              <span class="demo">
                <div class="chatting_content_box">
                  <span>{{ item.chattingContent }}</span>
                </div>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="bottomDiv">
      <div class="SendMessage"><ElInput v-model="inputValue"></ElInput></div>
      <div class="sentButton">发送</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElInput } from 'element-plus'

const emit = defineEmits(['emitsClose'])
const isShow = ref(false)
const inputValue = ref('')

const closeItem = () => {
  emit('emitsClose', isShow.value)
}

const chattingList = ref([
  {
    mySelf: 0,
    chattingImg:
      'https://img2.baidu.com/it/u=125684719,3114347481&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500',
    chattingName: '小徐同学',
    chattingContent: '对dasdasddasdsadasdsa撒打算大撒打算大时代大撒的撒的大搭讪'
  },
  {
    mySelf: 0,
    chattingImg:
      'https://img2.baidu.com/it/u=125684719,3114347481&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500',
    chattingName: '小🦅同学',
    chattingContent: '无语了下头男真的好无语下头男'
  },
  {
    mySelf: 1,
    chattingImg:
      'https://img2.baidu.com/it/u=125684719,3114347481&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500',
    chattingName: '小🦅同学',
    chattingContent: '无语了下头男真的好无语下头男'
  }
])
</script>

<style scoped lang="less">
.dataDiv {
  height: 700px;
  width: 700px;
  background-color: #86909c;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.body_main {
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.topDiv {
  height: 50px;
  width: 100%;
  background-color: brown;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bodyDiv {
  width: 700px;
  height: 550px;
  display: flex;
  justify-content: center;
}
.bottomDiv {
  height: 100px;
  background-color: cornflowerblue;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chatting_other {
  width: 250px;
  height: 100px;
  background-color: pink;
  display: flex;
  align-items: center;

  .chatting_img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .demo {
    border-radius: 4px;
    border: 1px solid #ffffff;
    position: relative;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo::before,
  .demo::after {
    content: '';
    position: absolute;
    top: 2px;
    left: -10px;
    width: 0px;
    height: 0px;
    border-right: 5px solid white;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid transparent;
  }
  .demo::after {
    border-right: 5px solid #ffffff;
  }
  .chatting_main {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }

  .chatting_content_box {
    width: 90%;
    height: 85%;
    border-radius: 10px;
  }
}

.chattingMyself {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: end;

  .chatting_img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .demo {
    border-radius: 4px;
    border: 1px solid #ffffff;
    position: relative;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo::before,
  .demo::after {
    content: '';
    position: absolute;
    top: 2px;
    left: -10px;
    width: 0px;
    height: 0px;
    border-right: 5px solid white;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid transparent;
  }
  .demo::after {
    border-right: 5px solid #ffffff;
  }
  .chatting_main {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }

  .chatting_content_box {
    width: 90%;
    height: 85%;
    border-radius: 10px;
  }
}

.top_titleBox {
  font-size: 24px;
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.SendMessage {
  width: 80%;
}
.sentButton {
  margin-left: 15px;
}
</style>
