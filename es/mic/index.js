/*! Icons Vue v1.1.37 */

import{defineComponent as m}from"vue";import{createElementVNode as u,normalizeStyle as _,openBlock as v,createElementBlock as y}from"vue";import{ref as i,onMounted as x,watch as E}from"vue";var g=u("path",{fill:"currentColor",d:"M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"},null,-1),w=[g],s=m({__name:"mic",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let a=e,t=i(null),o=i({fill:"red",width:"100px"});return E(a,n=>{let{size:r,color:c,spin:p,width:l,fill:d}=n,h={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:l||void 0,color:c,fill:d};o.value=Object.assign({...h})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(v(),y("svg",{ref_key:"svg",ref:t,style:_(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,a)=>{let t=e.__vccOpts||e;for(let[o,n]of a)t[o]=n;return t};var M=f(s,[["__file","mic.vue"]]);export{M as default};
