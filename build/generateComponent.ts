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
      entryPoints: [path.resolve(pathSrc, 'setting/component.ts')],
      target: ['esnext'],
      platform: 'neutral',
      plugins: [
        vue({
          isProduction: true,
          sourceMap: false
        })
      ],
      bundle: false,
      format,
      minifySyntax: true,
      banner: {
        js: `/*! Icons Vue v${version} */\n`
      },
      outdir: process.cwd()
    }

    return options
  }
  const doBuild = async () => {
    await Promise.all([
      build({
        ...getBuildOptions('esm'),
        entryNames: 'es/' + `[name]`
      }),
      build({
        ...getBuildOptions('cjs'),
        entryNames: 'lib/' + `[name]`,
        outExtension: {
          '.js': '.js'
        }
      })
    ])
  }

  return Promise.all([doBuild()])
}

consola.info(chalk.blue('cleaning dist...'))
await emptyDir(pathOutput)
await buildBundle()
