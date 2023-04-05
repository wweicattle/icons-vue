/*! Icons Vue v2.0.1 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var v=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!w.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(a=y(e,o))||a.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};v(B,{default:()=>k});module.exports=E(B);var d=require("vue"),r=require("vue"),l=require("vue"),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"},null,-1),z=[S],p=(0,d.defineComponent)({__name:"d-arrow-right",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,l.ref)(null),a=(0,l.ref)({fill:"red",width:"100px"});return(0,l.watch)(e,o=>{let{size:i,color:u,spin:m,width:f,fill:_}=o,g={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:u,fill:_};a.value=Object.assign({...g})},{deep:!0,immediate:!0}),(0,l.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var c=(t,e)=>{let n=t.__vccOpts||t;for(let[a,o]of e)n[a]=o;return n};var k=c(p,[["__file","d-arrow-right.vue"]]);
