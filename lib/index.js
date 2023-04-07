/*! Icons Vue v2.0.24 */

"use strict";var l=Object.create;var s=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var y=(t,o)=>{for(var n in o)s(t,n,{get:o[n],enumerable:!0})},r=(t,o,n,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of m(o))!u.call(t,e)&&e!==n&&s(t,e,{get:()=>o[e],enumerable:!(p=f(o,e))||p.enumerable});return t},a=(t,o,n)=>(r(t,o,"default"),n&&r(n,o,"default")),A=(t,o,n)=>(n=t!=null?l(x(t)):{},r(o||!t||!t.__esModule?s(n,"default",{value:t,enumerable:!0}):n,t)),I=t=>r(s({},"__esModule",{value:!0}),t);var i={};y(i,{default:()=>b});module.exports=I(i);var c=A(require("./component.js"),1);a(i,require("./component.js"),module.exports);const O={install:(t,{prefix:o=""}={})=>{for(const[n,p]of Object.entries(c))t.component(o+n,p);return t},icons:c};var b=O;
et, mod, "default")), __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var icons = __toESM(require("./component.js"), 1);
__reExport(src_exports, require("./component.js"), module.exports);
const IconsData = {
  install: (app, { prefix = "" } = {}) => {
    for (const [key, component] of Object.entries(icons))
      app.component(prefix + key, component);
    return app;
  },
  icons
};
var src_default = IconsData;
