/*! Icons Vue v1.1.39 */

"use strict";var a=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var n in e)a(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!w.call(t,o)&&o!==n&&a(t,o,{get:()=>e[o],enumerable:!(l=g(e,o))||l.enumerable});return t};var E=t=>x(a({},"__esModule",{value:!0}),t);var B={};h(B,{default:()=>z});module.exports=E(B);var d=require("vue"),r=require("vue"),i=require("vue"),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"},null,-1),k=[S],p=(0,d.defineComponent)({__name:"sort-down",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),l=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:s,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:s||void 0,width:f||void 0,color:u,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,s)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var c=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var z=c(p,[["__file","sort-down.vue"]]);
