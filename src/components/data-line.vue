<template>
  <svg
    ref="svg"
    :style="styleSvg"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
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
