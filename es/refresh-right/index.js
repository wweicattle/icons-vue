/*! Icons Vue v2.0.14 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/refresh-right.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1);
var _hoisted_2 = [
  _hoisted_1
];
var refresh_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "refresh-right",
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
      default: false
    },
    fill: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const svg = ref(null);
    const styleSvg = ref({ fill: "red", width: "100px" });
    watch(
      props,
      (newVal) => {
        const { size, color, spin, width, fill } = newVal;
        const styleCss = {
          animation: spin ? "loadingCircle 1s infinite linear" : void 0,
          fontSize: size ? size : void 0,
          width: width ? width : void 0,
          color,
          fill
        };
        styleSvg.value = Object.assign({ ...styleCss });
      },
      { deep: true, immediate: true }
    );
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("svg", {
        ref_key: "svg",
        ref: svg,
        style: _normalizeStyle(styleSvg.value),
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
      }, _hoisted_2, 4);
    };
  }
});

// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

// src/components/refresh-right.vue
var refresh_right_default = /* @__PURE__ */ export_helper_default(refresh_right_vue_vue_type_script_setup_true_lang_default, [["__file", "refresh-right.vue"]]);
export {
  refresh_right_default as default
};
