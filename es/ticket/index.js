/*! Icons Vue v2.0.17 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as a,onMounted as x,watch as k}from"vue";var g=_("path",{fill:"currentColor",d:"M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"},null,-1),w=[g],s=m({__name:"ticket",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return k(r,n=>{let{size:l,color:c,spin:p,width:i,fill:d}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:c,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","ticket.vue"]]);export{M as default};
