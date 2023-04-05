/*! Icons Vue v2.0.1 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},z=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!v.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var q={};w(q,{default:()=>B});module.exports=x(q);var c=require("vue"),n=require("vue"),i=require("vue"),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"},null,-1),S=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"},null,-1),C=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"},null,-1),k=[E,S,C],d=(0,c.defineComponent)({__name:"male",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var p=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var B=p(d,[["__file","male.vue"]]);
