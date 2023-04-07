/*! Icons Vue v2.0.14 */


// unplugin-vue:/Users/chenbin/Desktop/代码/TqIcon/tq-icon/packages/vue/src/components/knife-fork.vue?vue&type=script&setup=true&lang.ts
import { defineComponent as _defineComponent } from "vue";
import { createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
import { ref, onMounted, watch } from "vue";
var _hoisted_1 = /* @__PURE__ */ _createElementVNode("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1);
var _hoisted_2 = [
  _hoisted_1
];
var knife_fork_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ _defineComponent({
  __name: "knife-fork",
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

// src/components/knife-fork.vue
var knife_fork_default = /* @__PURE__ */ export_helper_default(knife_fork_vue_vue_type_script_setup_true_lang_default, [["__file", "knife-fork.vue"]]);
export {
  knife_fork_default as default
};
