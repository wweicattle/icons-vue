/*! Icons Vue v2.0.1 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as y}from"vue";import{ref as i,onMounted as z,watch as x}from"vue";var g=_("path",{fill:"currentColor",d:"M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"},null,-1),w=[g],s=m({__name:"document-copy",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return x(r,n=>{let{size:l,color:f,spin:p,width:a,fill:d}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:f,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),z(()=>{}),(n,l)=>(h(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=c(s,[["__file","document-copy.vue"]]);export{M as default};
