import path from "node:path"
import consola from "consola"
import chalk from "chalk"
import { build } from "esbuild"
import GlobalsPlugin from "esbuild-plugin-globals"
import vue from "unplugin-vue/esbuild"
import { emptyDir } from "fs-extra"
import { version } from "../package.json"
import { pathOutputModule, pathSrc } from "./paths"
import glob from "fast-glob"
import type { BuildOptions, Format } from "esbuild"

const getSvgFiles = async () => {
  const dir = process.cwd()
  let dirs = path.resolve(pathSrc + "/components")
  return glob("*.vue", { cwd: dirs, absolute: true })
}
let getVueDatas = await getSvgFiles()
const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: getVueDatas,
      target: "es2018",
      platform: "neutral",
      plugins: [
        vue({
          isProduction: true,
          sourceMap: false,
        }),
      ],
      bundle: true,
      format,
      minifySyntax: true,
      banner: {
        js: `/*! Icons Vue v${version} */\n`,
      },
      outdir: pathOutputModule,
    }
    if (format === "iife") {
      options.plugins!.push(
        GlobalsPlugin({
          vue: "Vue",
        })
      )
      options.globalName = "ElementPlusIconsVue"
    } else {
      options.external = ["vue"]
    }

    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions("esm"),
        entryNames: "es/" + `[name]/index${minify ? ".min" : ""}`,
        minify,
      }),
      // build({
      //   ...getBuildOptions("iife"),
      //   entryNames: "iife/" + `[name]/index.iife${minify ? ".min" : ""}`,
      //   minify,
      // }),
      build({
        ...getBuildOptions("cjs"),
        entryNames: "lib/" + `[name]/index${minify ? ".min" : ""}`,
        outExtension: { ".js": ".cjs" },
        minify,
      }),
    ])
  }
  return Promise.all([doBuild(true), doBuild(false)])
}

consola.info(chalk.blue("cleaning dist..."))
// await emptyDir(pathOutput)
consola.info(chalk.blue("building..."))
// 需要遍历所有的组件打包成各自的文件夹
await buildBundle()
