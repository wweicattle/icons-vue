/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},x=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!g.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var M={};w(M,{default:()=>B});module.exports=z(M);var f=require("vue"),n=require("vue"),i=require("vue"),C=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"},null,-1),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"},null,-1),S=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"},null,-1),k=[C,E,S],p=(0,f.defineComponent)({__name:"place",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:c,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:c||void 0,color:u,fill:_};r.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var d=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var B=d(p,[["__file","place.vue"]]);
