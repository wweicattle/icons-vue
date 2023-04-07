/*! Icons Vue v2.0.21 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/wind-power.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1), _hoisted_2 = [
  _hoisted_1
], wind_power_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "wind-power",
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

// src/components/wind-power.vue
var wind_power_default = /* @__PURE__ */ export_helper_default(wind_power_vue_vue_type_script_setup_true_lang_default, [["__file", "wind-power.vue"]]);
export {
  wind_power_default as default
};
