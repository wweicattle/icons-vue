/*! Icons Vue v2.0.7 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!y.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=g(e,o))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var C={};w(C,{default:()=>B});module.exports=z(C);var f=require("vue"),l=require("vue"),a=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"},null,-1),S=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M192 704h640v64H192z"},null,-1),k=[E,S],c=(0,f.defineComponent)({__name:"shopping-bag",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:u,spin:m,width:p,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:p||void 0,color:u,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var B=d(c,[["__file","shopping-bag.vue"]]);
