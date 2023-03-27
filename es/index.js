/*! Icons Vue v1.1.28 */

import * as icons from "./component";
var src_default = (app, { prefix = "ElIcon" } = {}) => {
  for (const [key, component] of Object.entries(icons))
    app.component(prefix + key, component);
};
export * from "./component";
export {
  src_default as default,
  icons
};
