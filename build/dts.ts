
import path from "node:path"
import { format } from "prettier"
import { pathComponents } from "./paths"
import type { BuiltInParserName } from "prettier"
import glob from "fast-glob"
import consola from "consola"
import camelcase from "camelcase"
import {  writeFile } from "node:fs/promises"
import chalk from "chalk"
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
const getSvgFiles = async () => {
  const dir = process.cwd()
  console.log(dir.replace("/vue", "/svg"),111);
  return glob("*.svg", { cwd: dir.replace("/vue", "/svg"), absolute: true })
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
const files = await getSvgFiles()
consola.info(chalk.blue("generating entry file"))
await generateEntry(files)