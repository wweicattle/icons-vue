import * as icons from "./component"

export default (app, { prefix = "ElIcon" } = {}) => {
  for (const [key, component] of Object.entries(icons)) {
    app.component(prefix + key, component)
  }
}

export { icons }
export * from "./component"
