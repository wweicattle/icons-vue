/*! Icons Vue v1.1.24 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/paperclip.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1), _hoisted_2 = [
  _hoisted_1
], paperclip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "paperclip",
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

// src/components/paperclip.vue
var paperclip_default = /* @__PURE__ */ export_helper_default(paperclip_vue_vue_type_script_setup_true_lang_default, [["__file", "paperclip.vue"]]);
export {
  paperclip_default as default
};
