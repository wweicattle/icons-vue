/*! Icons Vue v1.1.10 */

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

  // src/components/stopwatch.vue
  var stopwatch_exports = {};
  __export(stopwatch_exports, {
    default: () => stopwatch_default
  });

  // unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/stopwatch.vue?vue&type=script&setup=true&lang.ts
  var import_vue = __toESM(require_vue()), import_vue2 = __toESM(require_vue()), import_vue3 = __toESM(require_vue()), _hoisted_1 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  }, null, -1), _hoisted_2 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    fill: "currentColor",
    d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
  }, null, -1), _hoisted_3 = [
    _hoisted_1,
    _hoisted_2
  ], stopwatch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
    __name: "stopwatch",
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
      }, _hoisted_3, 4));
    }
  });

  // unplugin-vue:/plugin-vue/export-helper
  var export_helper_default = (sfc, props) => {
    let target = sfc.__vccOpts || sfc;
    for (let [key, val] of props)
      target[key] = val;
    return target;
  };

  // src/components/stopwatch.vue
  var stopwatch_default = /* @__PURE__ */ export_helper_default(stopwatch_vue_vue_type_script_setup_true_lang_default, [["__file", "stopwatch.vue"]]);
  return __toCommonJS(stopwatch_exports);
})();
