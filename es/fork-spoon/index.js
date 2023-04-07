/*! Icons Vue v2.0.24 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/fork-spoon.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1), _hoisted_2 = [
  _hoisted_1
], fork_spoon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "fork-spoon",
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

// src/components/fork-spoon.vue
var fork_spoon_default = /* @__PURE__ */ export_helper_default(fork_spoon_vue_vue_type_script_setup_true_lang_default, [["__file", "fork-spoon.vue"]]);
export {
  fork_spoon_default as default
};
