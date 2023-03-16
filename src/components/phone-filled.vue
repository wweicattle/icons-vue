<template>
  <svg
    ref="svg"
    :style="styleSvg"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
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
