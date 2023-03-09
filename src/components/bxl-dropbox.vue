<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M7.004 3.5 2 6.689l5.004 3.186 5.002-3.186zm10.005 0-5.003 3.189 5.003 3.186 5.003-3.186zM2 13.062l5.004 3.187 5.002-3.187-5.002-3.187zm15.009-3.187-5.003 3.187 5.003 3.187 5.003-3.187zM7.004 17.311l5.002 3.189 5.003-3.189-5.003-3.186z"
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
