<template>
  <svg
    ref="svg"
    :style="styleSvg"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
    />
  </svg>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    defualt: '',
  },
  spin: {
    type: Boolean,
    default: false,
  },
  fill: {
    type: String,
    default: '',
  },
})
const svg = ref(null)
const styleSvg = ref<any>({ fill: 'red', width: '100px' })

watch(
  props,
  (newVal) => {
    const { size, color, spin, width, fill } = newVal
    const styleCss = {
      animation: spin ? 'loadingCircle 1s infinite linear' : undefined,
      fontSize: size ? size : undefined,
      width: width ? width : undefined,
      color: color,
      fill,
    }
    styleSvg.value = Object.assign({ ...styleCss })
  },
  { deep: true, immediate: true }
)
onMounted(() => {})
</script>
