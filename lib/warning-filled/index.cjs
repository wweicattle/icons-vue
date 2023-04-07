/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var o in e)s(t,o,{get:e[o],enumerable:!0})},x=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of w(e))!v.call(t,n)&&n!==o&&s(t,n,{get:()=>e[n],enumerable:!(r=y(e,n))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var B={};h(B,{default:()=>k});module.exports=z(B);var d=require("vue"),l=require("vue"),i=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),S=[E],p=(0,d.defineComponent)({__name:"warning-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,o=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,n=>{let{size:a,color:u,spin:m,width:f,fill:_}=n,g={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...g})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(n,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:o,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var c=(t,e)=>{let o=t.__vccOpts||t;for(let[r,n]of e)o[r]=n;return o};var k=c(p,[["__file","warning-filled.vue"]]);
