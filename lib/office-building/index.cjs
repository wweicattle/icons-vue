/*! Icons Vue v1.1.39 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},w=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!y.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var H=t=>w(s({},"__esModule",{value:!0}),t);var B={};z(B,{default:()=>k});module.exports=H(B);var c=require("vue"),n=require("vue"),i=require("vue"),x=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"},null,-1),S=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"},null,-1),C=[x,E,S],d=(0,c.defineComponent)({__name:"office-building",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:p,spin:m,width:f,fill:v}=o,_={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:p,fill:v};r.value=Object.assign({..._})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},C,4))}});var u=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var k=u(d,[["__file","office-building.vue"]]);
