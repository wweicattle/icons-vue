/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};z(B,{default:()=>S});module.exports=x(B);var c=require("vue"),l=require("vue"),i=require("vue"),k=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),q=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"},null,-1),E=[k,q],d=(0,c.defineComponent)({__name:"notebook",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},E,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var S=p(d,[["__file","notebook.vue"]]);
