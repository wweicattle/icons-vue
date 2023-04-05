/*! Icons Vue v1.1.39 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!v.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=h(e,o))||l.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var C={};z(C,{default:()=>B});module.exports=x(C);var c=require("vue"),a=require("vue"),r=require("vue"),E=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),S=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"},null,-1),k=[E,S],d=(0,c.defineComponent)({__name:"as",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,r.ref)(null),l=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,o=>{let{size:i,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:u,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(o,i)=>((0,a.openBlock)(),(0,a.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,a.normalizeStyle)(l.value),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},k,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var B=p(d,[["__file","as.vue"]]);
