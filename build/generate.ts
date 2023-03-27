import path from "node:path"
import glob from "fast-glob"
import consola from "consola"
import chalk from "chalk"
import { pathComponents, pathRoot, pathSrc, pathEs, pathLib } from "./paths"
import { emptyDir, ensureDir } from "fs-extra"
import { readFile, writeFile } from "node:fs/promises"
import { format } from "prettier"
import type { BuiltInParserName } from "prettier"
import camelcase from "camelcase"

consola.info(chalk.blue("generating vue components"))

await ensureDir(pathComponents)
await emptyDir(pathComponents)

const getSvgFiles = async () => {
  const dir = process.cwd()
  return glob("*.svg", { cwd: dir.replace("/vue", "/svg"), absolute: true })
}
const formatCode = (code: string, parser: BuiltInParserName = "typescript") =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const generateEsEntry = async (files: string[]) => {
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from '/${filename}'`
      })
      .join("\n")
  )
  console.log(pathRoot)

  await writeFile(path.resolve(pathSrc, "setting/component.ts"), code, "utf-8")
}
const generateEntry = async (files: string[]) => {
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join("\n")
  )
  console.log(code)
  console.log(11, pathComponents)
  await writeFile(path.resolve(pathComponents, "index.ts"), code, "utf-8")
}

// const generateLibEntry = async (files: string[]) => {
//   const code = formatCode(
//     files
//       .map((file) => {
//         const { filename, componentName } = getName(file)
//         return `export { default as ${componentName} } from './${filename}'`
//       })
//       .join("\n")
//   )
//   await writeFile(path.resolve(pathRoot, "lib/component.js"), code, "utf-8")

// }

const getName = (file: string) => {
  const filename = path.basename(file).replace(".svg", "")
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

const transformToVueComponent = async (file: string) => {
  let content = await readFile(file, "utf-8")
  const { filename, componentName } = getName(file)
  content = content.replace("<svg", '<svg ref="svg" :style="styleSvg"')
  const vue = formatCode(
    `
    <template>
    ${content}
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
  
  watch(props, (newVal) => {
    const { size, color, spin, width, fill } = newVal
    const styleCss = {
      animation: spin ? 'loadingCircle 1s infinite linear' : undefined,
      fontSize: size ? size : undefined,
      width: width ? width : undefined,
      color: color,
      fill,
    }
    styleSvg.value = Object.assign({ ...styleCss })
  }, { deep: true, immediate: true })
  onMounted(() => {
  
  })
  </script>
  `,
    "vue"
  )
  writeFile(path.resolve(pathComponents, `${filename}.vue`), vue, "utf-8")
}
const files = await getSvgFiles()
// 需要进行对svg图片进行压缩
consola.info(chalk.blue("generating vue files"))
await Promise.all(files.map((file) => transformToVueComponent(file)))

consola.info(chalk.blue("generating entry file"))
// 生成入口文件
await generateEsEntry(files)
await generateEntry(files)
