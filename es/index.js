/*! Icons Vue v2.0.20 */

import * as icons from "./component.js";
export * from "./component.js";
const IconsData = {
  install: (app, { prefix = "" } = {}) => {
    for (const [key, component] of Object.entries(icons))
      app.component(prefix + key, component);
    return app;
  },
  icons
};
var src_default = IconsData;
export {
  src_default as default
};
