/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(a=h(e,o))||a.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var k={};w(k,{default:()=>V});module.exports=x(k);var d=require("vue"),l=require("vue"),r=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"},null,-1),S=[E],p=(0,d.defineComponent)({__name:"delete-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,r.ref)(null),a=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,o=>{let{size:i,color:m,spin:u,width:f,fill:_}=o,v={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};a.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(o,i)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var c=(t,e)=>{let n=t.__vccOpts||t;for(let[a,o]of e)n[a]=o;return n};var V=c(p,[["__file","delete-filled.vue"]]);
