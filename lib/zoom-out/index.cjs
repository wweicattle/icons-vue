/*! Icons Vue v1.1.37 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!v.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=g(e,o))||l.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=x(B);var p=require("vue"),r=require("vue"),i=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),S=[E],c=(0,p.defineComponent)({__name:"zoom-out",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),l=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var k=d(c,[["__file","zoom-out.vue"]]);
