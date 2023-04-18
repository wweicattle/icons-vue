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
const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: [path.resolve(pathSrc, './index.ts')],
      target: 'es2018',
      platform: 'neutral',
      bundle: false,
      format,
      minifySyntax: true,
      minifyWhitespace: false,
      banner: {
        js: `/*! Icons Vue v${version} */\n`
      },
      outdir: process.cwd()
    }

    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions('esm'),
        entryNames: 'es/' + `[name]`,
        minify
      }),
      build({
        ...getBuildOptions('cjs'),
        entryNames: 'lib/' + `[name]`,
        outExtension: {
          '.js': '.js'
        },
        minify
      })
    ])
  }

  return Promise.all([doBuild(true), doBuild(false)])
}

await buildBundle()
