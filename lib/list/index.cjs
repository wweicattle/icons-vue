/*! Icons Vue v1.1.38 */

"use strict";var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)a(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&a(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var z=t=>x(a({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=z(B);var p=require("vue"),l=require("vue"),i=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"},null,-1),S=[E],c=(0,p.defineComponent)({__name:"list",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:s,color:u,spin:m,width:f,fill:_}=o,v={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:s||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,s)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var k=d(c,[["__file","list.vue"]]);
