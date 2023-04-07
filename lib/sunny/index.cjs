/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of v(e))!g.call(t,a)&&a!==n&&s(t,a,{get:()=>e[a],enumerable:!(l=z(e,a))||l.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};h(B,{default:()=>k});module.exports=x(B);var m=require("vue"),o=require("vue"),r=require("vue"),E=(0,o.createElementVNode)("path",{fill:"currentColor",d:"M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"},null,-1),S=[E],p=(0,m.defineComponent)({__name:"sunny",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,r.ref)(null),l=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,a=>{let{size:i,color:d,spin:u,width:f,fill:_}=a,y={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:d,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(a,i)=>((0,o.openBlock)(),(0,o.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,o.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var c=(t,e)=>{let n=t.__vccOpts||t;for(let[l,a]of e)n[l]=a;return n};var k=c(p,[["__file","sunny.vue"]]);
