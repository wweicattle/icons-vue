/*! Icons Vue v2.0.3 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=y(e,o))||l.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var C={};w(C,{default:()=>B});module.exports=x(C);var d=require("vue"),r=require("vue"),i=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M480 512h64v320h-64z"},null,-1),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"},null,-1),k=[E,S],f=(0,d.defineComponent)({__name:"coordinate",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),l=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:c,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:c||void 0,color:u,fill:_};l.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var B=p(f,[["__file","coordinate.vue"]]);
