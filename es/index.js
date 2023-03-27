/*! Icons Vue v1.1.24 */

import * as icons from "./components";
var src_default = (app, { prefix = "ElIcon" } = {}) => {
  for (const [key, component] of Object.entries(icons))
    app.component(prefix + key, component);
};
export * from "./components";
export {
  src_default as default,
  icons
};
