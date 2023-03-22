import * as icons from "./component.js"

export default (app:any, { prefix = "ElIcon" } = {}) => {
  for (const [key, component] of Object.entries(icons)) {
    app.component(prefix + key, component)
  }
}

export { icons }
export * from "./component.js"
