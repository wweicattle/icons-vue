/*! Icons Vue v2.0.24 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/bicycle.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock, createStaticVNode as _createStaticVNode } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createStaticVNode('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), _hoisted_6 = [
  _hoisted_1
], bicycle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "bicycle",
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
    }, _hoisted_6, 4));
  }
});

// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};

// src/components/bicycle.vue
var bicycle_default = /* @__PURE__ */ export_helper_default(bicycle_vue_vue_type_script_setup_true_lang_default, [["__file", "bicycle.vue"]]);
export {
  bicycle_default as default
};
