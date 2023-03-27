import * as icons from "../components"
import type { App } from "vue"
import "./index.css"
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
