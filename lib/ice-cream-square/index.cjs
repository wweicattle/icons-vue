/*! Icons Vue v2.0.15 */

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// src/components/ice-cream-square.vue
var ice_cream_square_exports = {};
__export(ice_cream_square_exports, {
  default: () => ice_cream_square_default
});
module.exports = __toCommonJS(ice_cream_square_exports);

// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/ice-cream-square.vue?vue&type=script&setup=true&lang.ts
var import_vue = require("vue"), import_vue2 = require("vue"), import_vue3 = require("vue"), _hoisted_1 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1), _hoisted_2 = [
  _hoisted_1
], ice_cream_square_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "ice-cream-square",
  props: {
    size: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      defualt: ""
    },
    spin: {
      type: Boolean,
      default: !1
    },
    fill: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    let props = __props, svg = (0, import_vue3.ref)(null), styleSvg = (0, import_vue3.ref)({ fill: "red", width: "100px" });
    return (0, import_vue3.watch)(
      props,
      (newVal) => {
        let { size, color, spin, width, fill } = newVal, styleCss = {
          animation: spin ? "loadingCircle 1s infinite linear" : void 0,
          fontSize: size || void 0,
          width: width || void 0,
          color,
          fill
        };
        styleSvg.value = Object.assign({ ...styleCss });
      },
      { deep: !0, immediate: !0 }
    ), (0, import_vue3.onMounted)(() => {
    }), (_ctx, _cache) => ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
      ref_key: "svg",
      ref: svg,
      style: (0, import_vue2.normalizeStyle)(styleSvg.value),
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg"
    }, _hoisted_2, 4));
  }
});

// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};

// src/components/ice-cream-square.vue
var ice_cream_square_default = /* @__PURE__ */ export_helper_default(ice_cream_square_vue_vue_type_script_setup_true_lang_default, [["__file", "ice-cream-square.vue"]]);
