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

// src/components/magic-stick.vue
var magic_stick_exports = {};
__export(magic_stick_exports, {
  default: () => magic_stick_default
});
module.exports = __toCommonJS(magic_stick_exports);

// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/magic-stick.vue?vue&type=script&setup=true&lang.ts
var import_vue = require("vue"), import_vue2 = require("vue"), import_vue3 = require("vue"), _hoisted_1 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1), _hoisted_2 = [
  _hoisted_1
], magic_stick_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "magic-stick",
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

// src/components/magic-stick.vue
var magic_stick_default = /* @__PURE__ */ export_helper_default(magic_stick_vue_vue_type_script_setup_true_lang_default, [["__file", "magic-stick.vue"]]);
