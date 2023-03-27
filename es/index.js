/*! Icons Vue v1.1.35 */

import * as icons from "./component";
const instal = {
  install: (app, { prefix = "" } = {}) => {
    for (const [key, component] of Object.entries(icons))
      app.component(prefix + key, component);
    return app;
  }
};
var src_default = instal;
export * from "./component";
export {
  src_default as default
};
