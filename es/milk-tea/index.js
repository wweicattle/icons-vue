/*! Icons Vue v1.1.39 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var v=_("path",{fill:"currentColor",d:"M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"},null,-1),w=[v],s=u({__name:"milk-tea",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return z(l,n=>{let{size:r,color:p,spin:c,width:a,fill:d}=n,m={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:p,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var V=f(s,[["__file","milk-tea.vue"]]);export{V as default};
