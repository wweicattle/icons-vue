/*! Icons Vue v1.1.37 */

"use strict";var s=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var g=(t,e)=>{for(var o in e)s(t,o,{get:e[o],enumerable:!0})},w=(t,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of z(e))!y.call(t,a)&&a!==o&&s(t,a,{get:()=>e[a],enumerable:!(l=_(e,a))||l.enumerable});return t};var V=t=>w(s({},"__esModule",{value:!0}),t);var k={};g(k,{default:()=>S});module.exports=V(k);var c=require("vue"),n=require("vue"),r=require("vue"),x=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"},null,-1),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"},null,-1),H=[x,E],f=(0,c.defineComponent)({__name:"cpu",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,o=(0,r.ref)(null),l=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,a=>{let{size:i,color:d,spin:u,width:m,fill:h}=a,v={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:m||void 0,color:d,fill:h};l.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(a,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:o,style:(0,n.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},H,4))}});var p=(t,e)=>{let o=t.__vccOpts||t;for(let[l,a]of e)o[l]=a;return o};var S=p(f,[["__file","cpu.vue"]]);
