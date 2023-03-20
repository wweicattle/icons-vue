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

  // src/components/mute.vue
  var mute_exports = {};
  __export(mute_exports, {
    default: () => mute_default
  });

  // unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/mute.vue?vue&type=script&setup=true&lang.ts
  var import_vue = __toESM(require_vue()), import_vue2 = __toESM(require_vue()), import_vue3 = __toESM(require_vue()), _hoisted_1 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    fill: "currentColor",
    d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
  }, null, -1), _hoisted_2 = /* @__PURE__ */ (0, import_vue2.createElementVNode)("path", {
    fill: "currentColor",
    d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
  }, null, -1), _hoisted_3 = [
    _hoisted_1,
    _hoisted_2
  ], mute_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
    __name: "mute",
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

  // src/components/mute.vue
  var mute_default = /* @__PURE__ */ export_helper_default(mute_vue_vue_type_script_setup_true_lang_default, [["__file", "mute.vue"]]);
  return __toCommonJS(mute_exports);
})();
