/*! Icons Vue v1.1.30 */

import * as icons from "./component";
var src_default = {
  install: (app, { prefix = "" } = {}) => {
    for (const [key, component] of Object.entries(icons))
      app.component(prefix + key, component);
    return app;
  }
};
export * from "./component";
export {
  src_default as default
};
