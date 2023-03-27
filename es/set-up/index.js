/*! Icons Vue v1.1.24 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/set-up.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1), _hoisted_2 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_3 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_4 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), _hoisted_5 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
], set_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "set-up",
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
    let props = __props, svg = ref(null), styleSvg = ref({ fill: "red", width: "100px" });
    return watch(
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
    ), onMounted(() => {
    }), (_ctx, _cache) => (_openBlock(), _createElementBlock("svg", {
      ref_key: "svg",
      ref: svg,
      style: _normalizeStyle(styleSvg.value),
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg"
    }, _hoisted_5, 4));
  }
});

// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};

// src/components/set-up.vue
var set_up_default = /* @__PURE__ */ export_helper_default(set_up_vue_vue_type_script_setup_true_lang_default, [["__file", "set-up.vue"]]);
export {
  set_up_default as default
};
