import * as icons from "./component"
import type { App } from "vue"

export interface InstallOptions {
  /** @default `Tq` */
  prefix?: string
}
const instal = {
  install: (app: App, { prefix = "" }: InstallOptions = {}) => {
    for (const [key, component] of Object.entries(icons)) {
      app.component(prefix + key, component)
    }
    return app
  },
} as {
  install: () => App
}
export default instal

export * from "./component"
