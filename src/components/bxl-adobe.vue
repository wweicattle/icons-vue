<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M21 19.966V4.034h-6.654zM3 4.034v15.932L9.658 4.034zM9.092 16.76h3.104l1.268 3.205h2.778L12.003 9.904z"
    />
  </svg>
</template>
<script lang="ts" setup>
const props = defineProps({
  width: {
    // 侧边栏菜单是否收起
    type: Number,
    default: 50,
  },
})
</script>
