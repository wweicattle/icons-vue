/*! Icons Vue v1.1.39 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as i,onMounted as x,watch as k}from"vue";var g=s("path",{fill:"currentColor",d:"M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"},null,-1),w=s("path",{fill:"currentColor",d:"M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),z=[g,w],f=_({__name:"first-aid-kit",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let a=e,t=i(null),o=i({fill:"red",width:"100px"});return k(a,n=>{let{size:r,color:c,spin:p,width:l,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:l||void 0,color:c,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var d=(e,a)=>{let t=e.__vccOpts||e;for(let[o,n]of a)t[o]=n;return t};var N=d(f,[["__file","first-aid-kit.vue"]]);export{N as default};
