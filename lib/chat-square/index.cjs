/*! Icons Vue v2.0.7 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!v.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(a=g(e,o))||a.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=E(B);var c=require("vue"),r=require("vue"),l=require("vue"),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"},null,-1),z=[S],p=(0,c.defineComponent)({__name:"chat-square",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,l.ref)(null),a=(0,l.ref)({fill:"red",width:"100px"});return(0,l.watch)(e,o=>{let{size:i,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:u,fill:_};a.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,l.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[a,o]of e)n[a]=o;return n};var k=d(p,[["__file","chat-square.vue"]]);
