/*! Icons Vue v2.0.17 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as g,openBlock as y,createElementBlock as h}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var v=_("path",{fill:"currentColor",d:"M288 128h608L736 384l160 256H288v320h-96V64h96v64z"},null,-1),w=[v],s=m({__name:"flag",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:p,spin:c,width:i,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(y(),h("svg",{ref_key:"svg",ref:t,style:g(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(s,[["__file","flag.vue"]]);export{N as default};
