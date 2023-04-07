/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},V=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=_(e,o))||r.enumerable});return t};var x=t=>V(s({},"__esModule",{value:!0}),t);var k={};w(k,{default:()=>S});module.exports=x(k);var c=require("vue"),l=require("vue"),i=require("vue"),H=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"},null,-1),z=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"},null,-1),E=[H,z],d=(0,c.defineComponent)({__name:"film",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:h}=o,v={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:h};r.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},E,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var S=p(d,[["__file","film.vue"]]);
