/*! Icons Vue v1.1.38 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=h(e,o))||l.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=E(B);var f=require("vue"),a=require("vue"),r=require("vue"),S=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"},null,-1),z=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"},null,-1),V=[S,z],d=(0,f.defineComponent)({__name:"connection",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,r.ref)(null),l=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,o=>{let{size:i,color:u,spin:m,width:c,fill:_}=o,v={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:u,fill:_};l.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(o,i)=>((0,a.openBlock)(),(0,a.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,a.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},V,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var k=p(d,[["__file","connection.vue"]]);
