<template>
  <div class="bg-cover" v-if="showCover"></div>
</template>

<script setup>
const props = defineProps(['showCover'])
</script>

<style scoped>
.bg-cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
