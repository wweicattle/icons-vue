/*! Icons Vue v1.1.25 */

import * as icons from "./components.js";
var src_default = (app, { prefix = "ElIcon" } = {}) => {
  for (const [key, component] of Object.entries(icons))
    app.component(prefix + key, component);
};
export * from "./components.js";
export {
  src_default as default,
  icons
};
