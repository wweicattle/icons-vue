import * as icons from "./component.js"
import type { App } from "vue"
export * from "./component.js"
export interface InstallOptions {
  /** @default `Tq` */
  prefix?: string
}
const IconsData = {
  install: (app: App, { prefix = "" }: InstallOptions = {}) => {
    for (const [key, component] of Object.entries(icons)) {
      app.component(prefix + key, component)
    }
    return app
  },
  icons,
} as {
  install: () => App
  icons: any
}
export default IconsData
