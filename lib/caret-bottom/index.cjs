/*! Icons Vue v2.0.7 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!h.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=g(e,o))||l.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>z});module.exports=E(B);var c=require("vue"),r=require("vue"),i=require("vue"),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"m192 384 320 384 320-384z"},null,-1),k=[S],p=(0,c.defineComponent)({__name:"caret-bottom",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),l=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:m,spin:u,width:f,fill:_}=o,y={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:m,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var z=d(p,[["__file","caret-bottom.vue"]]);
