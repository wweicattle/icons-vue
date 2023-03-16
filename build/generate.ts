import path from "node:path"
import glob from "fast-glob"
import consola from "consola"
import chalk from "chalk"
import { pathComponents } from "./paths"
import { emptyDir, ensureDir } from "fs-extra"
import findWorkspaceDir from "@pnpm/find-workspace-dir"
import findWorkspacePackages from "@pnpm/find-workspace-packages"
import { readFile, writeFile } from "node:fs/promises"
import { format } from "prettier"
import type { BuiltInParserName } from "prettier"
import camelcase from "camelcase"

consola.info(chalk.blue("generating vue components"))
console.log(pathComponents)
console.log(ensureDir)

await ensureDir(pathComponents)
await emptyDir(pathComponents)

console.log(process.cwd())
const getSvgFiles = async () => {
  // debugger
  // const pkgs = await // @ts-expect-error
  // (findWorkspacePackages.default as typeof findWorkspacePackages)(
  //   // @ts-expect-error
  //   (await findWorkspaceDir.default(process.cwd()))!
  // )
  // const pkg = pkgs.find(
  //   (pkg) =>{
  //     console.log(pkg,191919);

  //     return pkg.manifest.name === '@element-plus/icons-svg'
  //   }
  // )!
  // console.log(4444,pkg.dir)
  // console.log(process.cmd());
  const dir = "/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/svg"
  return glob("*.svg", { cwd: dir, absolute: true })
}
const formatCode = (code: string, parser: BuiltInParserName = "typescript") =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

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
  console.log(content, 44444)
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
// console.log(files)

consola.info(chalk.blue("generating vue files"))
await Promise.all(files.map((file) => transformToVueComponent(file)))

consola.info(chalk.blue("generating entry file"))
await generateEntry(files)
