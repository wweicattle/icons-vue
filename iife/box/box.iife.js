/*! Icons Vue v1.1.14 */

"use strict";
var ElementPlusIconsVue = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  )), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

  // globals:vue
  var require_vue = __commonJS({
    "globals:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // src/components/box.vue
  var box_exports = {};
  __export(box_exports, {
    default: () => box_default
  });

  // unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/box.vue?vue&type=script&setup=true&lang.ts
  var import_vue = __toESM(require_vue()), import_vue2 = __toESM(require_vue()), import_vue3 = __toESM(require_vue()), _hoisted_1 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    fill: "currentColor",
    d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
  }, null, -1), _hoisted_2 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    fill: "currentColor",
    d: "M64 320h896v64H64z"
  }, null, -1), _hoisted_3 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    fill: "currentColor",
    d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
  }, null, -1), _hoisted_4 = [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3
  ], box_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
    __name: "box",
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
      }, _hoisted_4, 4));
    }
  });

  // unplugin-vue:/plugin-vue/export-helper
  var export_helper_default = (sfc, props) => {
    let target = sfc.__vccOpts || sfc;
    for (let [key, val] of props)
      target[key] = val;
    return target;
  };

  // src/components/box.vue
  var box_default = /* @__PURE__ */ export_helper_default(box_vue_vue_type_script_setup_true_lang_default, [["__file", "box.vue"]]);
  return __toCommonJS(box_exports);
})();
