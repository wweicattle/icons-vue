/*! Icons Vue v2.0.1 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!h.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=y(e,o))||l.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=z(B);var c=require("vue"),r=require("vue"),a=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"},null,-1),S=[E],d=(0,c.defineComponent)({__name:"video-camera",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),l=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:m,spin:u,width:f,fill:_}=o,v={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};l.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var k=p(d,[["__file","video-camera.vue"]]);
