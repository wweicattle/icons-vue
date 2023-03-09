<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="m5.71 3 3.593 1.264v12.645l5.061-2.919-2.48-1.165-1.566-3.897 7.974 2.802v4.073l-8.984 5.183-3.595-2L5.71 3z"
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
