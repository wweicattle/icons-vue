/*! Icons Vue v1.1.24 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/document-add.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1), _hoisted_2 = [
  _hoisted_1
], document_add_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "document-add",
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

// src/components/document-add.vue
var document_add_default = /* @__PURE__ */ export_helper_default(document_add_vue_vue_type_script_setup_true_lang_default, [["__file", "document-add.vue"]]);
export {
  document_add_default as default
};
