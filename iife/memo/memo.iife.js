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

  // src/components/memo.vue
  var memo_exports = {};
  __export(memo_exports, {
    default: () => memo_default
  });

  // unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/memo.vue?vue&type=script&setup=true&lang.ts
  var import_vue = __toESM(require_vue()), import_vue2 = __toESM(require_vue()), import_vue3 = __toESM(require_vue()), _hoisted_1 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    d: "M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",
    fill: "currentColor"
  }, null, -1), _hoisted_2 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    d: "M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z",
    fill: "currentColor"
  }, null, -1), _hoisted_3 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    d: "M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",
    fill: "currentColor"
  }, null, -1), _hoisted_4 = [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3
  ], memo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
    __name: "memo",
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
        style: (0, import_vue2.normalizeStyle)([styleSvg.value, { "enable-background": "new 0 0 1024 1024" }]),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024",
        "xml:space": "preserve"
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

  // src/components/memo.vue
  var memo_default = /* @__PURE__ */ export_helper_default(memo_vue_vue_type_script_setup_true_lang_default, [["__file", "memo.vue"]]);
  return __toCommonJS(memo_exports);
})();
