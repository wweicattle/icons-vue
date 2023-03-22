/*! Icons Vue v1.1.18 */

import * as icons from "./component.js";
var src_default = (app, { prefix = "ElIcon" } = {}) => {
  for (const [key, component] of Object.entries(icons))
    app.component(prefix + key, component);
};
export * from "./component.js";
export {
  src_default as default,
  icons
};
