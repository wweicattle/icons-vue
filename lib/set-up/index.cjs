/*! Icons Vue v2.0.3 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},w=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of g(e))!v.call(t,n)&&n!==l&&s(t,n,{get:()=>e[n],enumerable:!(r=y(e,n))||r.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var q={};z(q,{default:()=>M});module.exports=x(q);var d=require("vue"),o=require("vue"),a=require("vue"),C=(0,o.createElementVNode)("path",{fill:"currentColor",d:"M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"},null,-1),E=(0,o.createElementVNode)("path",{fill:"currentColor",d:"M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),S=(0,o.createElementVNode)("path",{fill:"currentColor",d:"M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),k=(0,o.createElementVNode)("path",{fill:"currentColor",d:"M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),B=[C,E,S,k],f=(0,d.defineComponent)({__name:"set-up",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,n=>{let{size:i,color:u,spin:m,width:c,fill:_}=n,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:u,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(n,i)=>((0,o.openBlock)(),(0,o.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,o.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},B,4))}});var p=(t,e)=>{let l=t.__vccOpts||t;for(let[r,n]of e)l[r]=n;return l};var M=p(f,[["__file","set-up.vue"]]);
