/*! Icons Vue v2.0.7 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as y,createElementBlock as g}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1),w=[h],s=m({__name:"full-screen",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return z(l,n=>{let{size:r,color:c,spin:p,width:a,fill:d}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:c,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(s,[["__file","full-screen.vue"]]);export{N as default};
