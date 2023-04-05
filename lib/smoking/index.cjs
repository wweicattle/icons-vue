/*! Icons Vue v1.1.39 */

"use strict";var s=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!y.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=v(e,o))||r.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var C={};z(C,{default:()=>B});module.exports=x(C);var c=require("vue"),l=require("vue"),i=require("vue"),k=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"},null,-1),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"},null,-1),S=[k,E],d=(0,c.defineComponent)({__name:"smoking",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var B=p(d,[["__file","smoking.vue"]]);
