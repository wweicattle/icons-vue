/*! Icons Vue v2.0.7 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!h.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=g(e,o))||l.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=x(B);var m=require("vue"),r=require("vue"),a=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"},null,-1),S=[E],p=(0,m.defineComponent)({__name:"more",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),l=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:d,spin:u,width:f,fill:_}=o,y={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:d,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var c=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var k=c(p,[["__file","more.vue"]]);
