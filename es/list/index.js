/*! Icons Vue v2.0.1 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as y}from"vue";import{ref as s,onMounted as x,watch as z}from"vue";var g=_("path",{fill:"currentColor",d:"M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"},null,-1),w=[g],a=m({__name:"list",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return z(l,n=>{let{size:r,color:p,spin:c,width:i,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(h(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var M=f(a,[["__file","list.vue"]]);export{M as default};
