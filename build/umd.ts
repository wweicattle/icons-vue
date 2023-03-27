import path from 'node:path'
import consola from 'consola'
import chalk from 'chalk'
import { build } from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import vue from 'unplugin-vue/esbuild'
import { emptyDir } from 'fs-extra'
import { version } from '../package.json'
import { pathOutput, pathSrc } from './paths'
import type { BuildOptions, Format } from 'esbuild'
import { format } from "prettier"
import type { BuiltInParserName } from "prettier"
import camelcase from "camelcase"
import { readFile, writeFile } from "node:fs/promises"
import { pathComponents } from "./paths"
import glob from "fast-glob"

const formatCode = (code: string, parser: BuiltInParserName = "typescript") =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })


  const getName = (file: string) => {
    const filename = path.basename(file).replace(".svg", "")
    const componentName = camelcase(filename, { pascalCase: true })
    return {
      filename,
      componentName,
    }
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
  await writeFile(path.resolve(pathComponents, "index.ts"), code, "utf-8")
}
const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: [
        path.resolve(pathSrc, 'setting/index.ts'),
      ],
      target: 'es2018',
      platform: 'neutral',
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
      outdir: pathOutput,
    }

    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions('iife'),
        entryNames: `[name]${minify ? '.min' : ''}`,
        minify,
      }),
    ])
  }

  return Promise.all([doBuild(true), doBuild(false)])
}
const getSvgFiles = async () => {
  const dir = process.cwd()
  console.log(dir.replace("/vue", "/svg"),111);
  
  return glob("*.svg", { cwd: dir.replace("/vue", "/svg"), absolute: true })
}

const files = await getSvgFiles()
await generateEntry(files)
consola.info(chalk.blue('cleaning dist...'))
await emptyDir(pathOutput)
consola.info(chalk.blue('building...'))
await buildBundle()