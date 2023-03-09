<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M11.157 12a4.573 4.573 0 1 1-9.147 0 4.573 4.573 0 0 1 9.147 0zm10.833 0a4.573 4.573 0 1 1-9.147 0 4.573 4.573 0 0 1 9.147 0z"
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
