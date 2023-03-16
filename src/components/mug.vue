<template>
  <svg
    ref="svg"
    :style="styleSvg"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
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
