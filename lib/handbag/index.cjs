/*! Icons Vue v1.1.37 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var o in e)s(t,o,{get:e[o],enumerable:!0})},x=(t,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of v(e))!y.call(t,n)&&n!==o&&s(t,n,{get:()=>e[n],enumerable:!(l=g(e,n))||l.enumerable});return t};var S=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=S(B);var d=require("vue"),r=require("vue"),a=require("vue"),z=(0,r.createElementVNode)("path",{d:"M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01zM421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5zM832 896H192V320h128v128h64V320h256v128h64V320h128v576z",fill:"currentColor"},null,-1),E=[z],f=(0,d.defineComponent)({__name:"handbag",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,o=(0,a.ref)(null),l=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,n=>{let{size:i,color:u,spin:m,width:c,fill:_}=n,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:u,fill:_};l.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(n,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:o,style:(0,r.normalizeStyle)([l.value,{"enable-background":"new 0 0 1024 1024"}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","xml:space":"preserve"},E,4))}});var p=(t,e)=>{let o=t.__vccOpts||t;for(let[l,n]of e)o[l]=n;return o};var k=p(f,[["__file","handbag.vue"]]);
