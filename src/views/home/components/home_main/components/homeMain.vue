<template>
  <div id="home_main">
    <div class="swiper">
      <el-carousel indicator-position="outside" height="400px" ref="carousel">
        <el-carousel-item
          v-for="item in swaperList"
          :key="item.id"
          :label="item.title"
          :initial-index="0"
        >
          <div class="swimg" @click="pushRouter(item.id)">
            <img :src="item.imgUrl" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-tabs class="demo-tabs" v-model="tabsCount" @tab-click="changeArr">
      <template v-for="item in titleName">
        <el-tab-pane :label="item.dict_name" :name="item.id">
          <HomeList :artcleList="artcleList"></HomeList>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { apiGetEditData } from '@/request/edit'
import { apiGetArticleData } from '@/request/article'
import { apiGetSwaperData } from '@/request/swaper'
import { useRouter } from 'vue-router'
import HomeList from './homeList.vue'

const carousel = ref(null)
const tableIndex = ref(0)
const artcleList = ref([])
const swaperList = ref([])

const router = useRouter()

const pushRouter = (e) => {
  router.push(`/info?aricleId=${e}`)
}

onMounted(async () => {
  const { data: res } = await apiGetEditData()
  titleName.value = res.result
  tabsCount.value = titleName.value[0].id
  const { data: datas } = await apiGetArticleData(tabsCount.value)
  artcleList.value = datas
  const { data: swaper } = await apiGetSwaperData()
  swaperList.value = swaper
  setTimeout(() => {
    carousel.value.setActiveItem(0)
  }, 500)
})

// 标签
const titleName = ref([])
const tabsCount = ref()
const changeArr = async (e) => {
  const { data: res } = await apiGetArticleData(e.props.name)
  artcleList.value = res
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.swiper {
  margin: 10px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.demo-tabs {
  margin: 10px;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
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
.swimg {
  width: 100%;
  height: 100%;
  text-align: center;
}
.swimg img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  vertical-align: middle;
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
