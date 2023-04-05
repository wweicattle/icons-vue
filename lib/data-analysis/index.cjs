/*! Icons Vue v1.1.39 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var a in e)s(t,a,{get:e[a],enumerable:!0})},z=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!g.call(t,o)&&o!==a&&s(t,o,{get:()=>e[o],enumerable:!(l=y(e,o))||l.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=x(B);var d=require("vue"),n=require("vue"),r=require("vue"),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"},null,-1),S=[E],p=(0,d.defineComponent)({__name:"data-analysis",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,a=(0,r.ref)(null),l=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,o=>{let{size:i,color:m,spin:u,width:f,fill:_}=o,v={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};l.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(o,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:a,style:(0,n.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var c=(t,e)=>{let a=t.__vccOpts||t;for(let[l,o]of e)a[l]=o;return a};var k=c(p,[["__file","data-analysis.vue"]]);
