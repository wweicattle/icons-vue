/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var C={};w(C,{default:()=>B});module.exports=x(C);var f=require("vue"),l=require("vue"),a=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"},null,-1),S=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"},null,-1),k=[E,S],d=(0,f.defineComponent)({__name:"suitcase",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:u,spin:m,width:c,fill:_}=o,v={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:u,fill:_};r.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var B=p(d,[["__file","suitcase.vue"]]);
