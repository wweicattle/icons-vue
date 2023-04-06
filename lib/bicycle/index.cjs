/*! Icons Vue v2.0.3 */

"use strict";var c=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var z=Object.prototype.hasOwnProperty;var v=(t,e)=>{for(var r in e)c(t,r,{get:e[r],enumerable:!0})},w=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!z.call(t,o)&&o!==r&&c(t,o,{get:()=>e[o],enumerable:!(l=y(e,o))||l.enumerable});return t};var S=t=>w(c({},"__esModule",{value:!0}),t);var k={};v(k,{default:()=>E});module.exports=S(k);var s=require("vue"),a=require("vue"),n=require("vue"),x=(0,a.createStaticVNode)('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>',5),C=[x],f=(0,s.defineComponent)({__name:"bicycle",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,r=(0,n.ref)(null),l=(0,n.ref)({fill:"red",width:"100px"});return(0,n.watch)(e,o=>{let{size:i,color:u,spin:m,width:p,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:p||void 0,color:u,fill:_};l.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,n.onMounted)(()=>{}),(o,i)=>((0,a.openBlock)(),(0,a.createElementBlock)("svg",{ref_key:"svg",ref:r,style:(0,a.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},C,4))}});var d=(t,e)=>{let r=t.__vccOpts||t;for(let[l,o]of e)r[l]=o;return r};var E=d(f,[["__file","bicycle.vue"]]);
