/*! Icons Vue v2.0.7 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=z(B);var p=require("vue"),l=require("vue"),i=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"},null,-1),S=[E],c=(0,p.defineComponent)({__name:"files",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:m,spin:u,width:f,fill:_}=o,v={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:m,fill:_};r.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var k=d(c,[["__file","files.vue"]]);
