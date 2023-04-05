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
const envPlugin = {
  name: 'env',
  setup(build: any) {
    // namespace to reserve them for this plugin.
    build.onResolve({ filter: /^env$/ }, (args) => ({
      path: args.path,
      namespace: 'env-ns',
    }))
  },
}
console.log(323233);

const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: [
        path.resolve(pathSrc, 'index.ts'),
      ],
      target: 'es2018',
      platform: 'neutral',
      plugins: [
        envPlugin,
        vue({
          isProduction: true,
          sourceMap: false,
        }),
      ],
      bundle: true,
      format,
      minifySyntax: true,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      banner: {
        js: `/*! Icons Vue v${version} */\n`,
      },
      outdir: pathOutput,
    }
    if (format === 'iife') {
      options.plugins!.push(
        GlobalsPlugin({
          vue: 'Vue',
        })
      )
      options.globalName = 'ElementPlusIconsVue'
    } else {
      options.external = ['vue']
    }

    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions('esm'),
        entryNames: `[name]`,
        minify,
      }),
      build({
        ...getBuildOptions('iife'),
        entryNames: `[name].iife`,
        minify,
      }),
      build({
        ...getBuildOptions('cjs'),
        entryNames: `[name]`,
        outExtension: { '.js': '.cjs' },
        minify,
      }),
    ])
  }

  return Promise.all([doBuild(true), doBuild(false)])
}

consola.info(chalk.blue('cleaning dist...'))
await emptyDir(pathOutput)
consola.info(chalk.blue('building...'))
await buildBundle()