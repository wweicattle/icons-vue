/*! Icons Vue v2.0.7 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as g,openBlock as y,createElementBlock as h}from"vue";import{ref as i,onMounted as x,watch as E}from"vue";var v=_("path",{fill:"currentColor",d:"M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"},null,-1),w=[v],s=m({__name:"goblet-square",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return E(r,n=>{let{size:l,color:c,spin:p,width:a,fill:d}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:c,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),h("svg",{ref_key:"svg",ref:t,style:g(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","goblet-square.vue"]]);export{M as default};
