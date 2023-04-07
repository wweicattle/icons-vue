/*! Icons Vue v2.0.14 */

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/arrow-right-bold.vue
var arrow_right_bold_exports = {};
__export(arrow_right_bold_exports, {
  default: () => arrow_right_bold_default
});
module.exports = __toCommonJS(arrow_right_bold_exports);

// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/arrow-right-bold.vue?vue&type=script&setup=true&lang.ts
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_vue3 = require("vue");
var _hoisted_1 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1);
var _hoisted_2 = [
  _hoisted_1
];
var arrow_right_bold_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "arrow-right-bold",
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
      default: false
    },
    fill: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const svg = (0, import_vue3.ref)(null);
    const styleSvg = (0, import_vue3.ref)({ fill: "red", width: "100px" });
    (0, import_vue3.watch)(
      props,
      (newVal) => {
        const { size, color, spin, width, fill } = newVal;
        const styleCss = {
          animation: spin ? "loadingCircle 1s infinite linear" : void 0,
          fontSize: size ? size : void 0,
          width: width ? width : void 0,
          color,
          fill
        };
        styleSvg.value = Object.assign({ ...styleCss });
      },
      { deep: true, immediate: true }
    );
    (0, import_vue3.onMounted)(() => {
    });
    return (_ctx, _cache) => {
      return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
        ref_key: "svg",
        ref: svg,
        style: (0, import_vue2.normalizeStyle)(styleSvg.value),
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
      }, _hoisted_2, 4);
    };
  }
});

// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

// src/components/arrow-right-bold.vue
var arrow_right_bold_default = /* @__PURE__ */ export_helper_default(arrow_right_bold_vue_vue_type_script_setup_true_lang_default, [["__file", "arrow-right-bold.vue"]]);
